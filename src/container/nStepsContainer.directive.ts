namespace nAddContent {
    'use strict';

    const controllerAs = 'NAddContentContainer';

    class NAddContentContainer implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NAddContentContainer();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        controller: NAddContentContainerController = NAddContentContainerController;
        restrict: string = 'EA';
        templateUrl: string = 'src/container/nAddContentContainer.html';
        controllerAs: string = controllerAs;

        private linkFn(scope: any, element: any, attrs: any) {}
    }

    class NAddContentContainerController {
        private items: Array<INAddContentServiceItem>;

        static $inject: Array<string> = ['NAddContentService'];
        constructor(private NAddContentService: any) {
            this.items = this.NAddContentService.items;
        }
    }

    angular
        .module('nAddContent')
        .directive('nAddContentContainer', NAddContentContainer.instance);
}