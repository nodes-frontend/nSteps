namespace nAddContent {
    'use strict';
    
    const controllerAs = 'NAddContentCreate';

    class NAddContentCreate implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NAddContentCreate();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        controller: NAddContentCreateController = NAddContentCreateController;
        restrict: string = 'EA';
        controllerAs: string = controllerAs;

        private linkFn(scope: any, element: any, attrs: any) {
            element.on('click', () => {
                scope[controllerAs].add(attrs.template);
            });
        }
    }

    class NAddContentCreateController {
        static $inject: Array<string> = ['NAddContentService'];
        constructor(private NAddContentService: INAddContentService) {}

        add(template) {
            const item = this.NAddContentService.create(template);
            this.NAddContentService.add(item);
        }
    }

    angular
        .module('nAddContent')
        .directive('nAddContentCreate', NAddContentCreate.instance);
}