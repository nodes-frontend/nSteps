namespace nAddContent {
    'use strict';

    export interface INAddContentServiceItem {
        uuid: string;
        template: string;
        guid: () => String;
    }

    class NAddContentServiceItem implements INAddContentServiceItem {
        private uuid: string;
        private template: string;

        constructor(private template) {
            if(!template) throw 'Template is required!!!';
            this.uuid = this.guid();
        }

        private guid(): String {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    }

    export interface INAddContentService {
        create: (template) => INAddContentServiceItem;
        add: (item) => Array<INAddContentServiceItem>;
        getByUUID: (uuid) => Object;
        removeByUUID: (uuid) => Object;
        reset: () => Boolean
    }

    class NAddContentService implements INAddContentService {

        static $inject: Array<string> = ['$rootScope'];
        constructor(private $rootScope: any){}

        public items: Array<INAddContentServiceItem> = [];

        private create(template): INAddContentServiceItem {
            return new NAddContentServiceItem(template);
        }
        
        add(item): Array<INAddContentServiceItem> {
            if(!item) throw 'Item is required!!!';
            if( !item.hasOwnProperty('template') ) throw 'Item template is required!!!';
            if( !item.hasOwnProperty('uuid') ) throw 'Item uuid is required!!!';

            this.items.push(item);
            this.$rootScope.$apply();

            return this.items;
        }

        getByUUID(uuid): INAddContentServiceItem {
            if(!uuid) throw 'UUID is required!!!';

            const item = this.items.filter((item) => {
                return item.uuid === uuid;
            })[0];

            if(!item) throw 'UUID was not found!!!';
            return item;
        }

        removeByUUID(uuid): INAddContentServiceItem {
            const item  = this.getByUUID(uuid);
            const index = this.items.indexOf(item);

            this.items.splice(index, 1);
            this.$rootScope.$apply();

            return item;
        }

        reset(): Boolean {
            this.items.splice(0, this.items.length);
            this.$rootScope.$apply();
            return this.items.length === 0;
        }
    }

    angular
        .module('nAddContent')
        .service('NAddContentService', NAddContentService);
}

