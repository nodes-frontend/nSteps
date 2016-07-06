namespace nAddContent {
    'use strict';

    const controllerAs = 'NAddContentRemove';

    class NAddContentRemove implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NAddContentRemove();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        controller: NAddContentRemoveController = NAddContentRemoveController;
        restrict: string = 'EA';
        controllerAs: string = controllerAs;

        private linkFn(scope: any, element: any, attrs: any) {
            element.on('click', () => {
                scope[controllerAs].remove(attrs.uuid);
            });
        }
    }

    class NAddContentRemoveController {
        static $inject: Array<string> = ['NAddContentService'];
        constructor(private NAddContentService: INAddContentService) {}

        remove(uuid) {
            this.NAddContentService.removeByUUID(uuid);
        }
    }

    angular
        .module('nAddContent')
        .directive('nAddContentRemove', NAddContentRemove.instance);
}