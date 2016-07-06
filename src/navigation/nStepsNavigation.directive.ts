namespace nSteps {
    'use strict';
    
    const controllerAs = 'nSteps';

    class NStepsNav implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NStepsNav();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        controller: NStepsNavController = NStepsNavController;
        restrict: string = 'EA';
        controllerAs: string = controllerAs;

        private linkFn(scope: any, element: any, attrs: any) {
        }
    }

    class NStepsNavController {
        static $inject: Array<string> = ['NStepsService'];
        constructor(private nav: INStepsService) {}
    }

    angular
        .module('nSteps')
        .directive('nStepsNav', NStepsNav.instance);
}