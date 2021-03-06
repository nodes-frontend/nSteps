namespace nSteps {
    'use strict';

    const controllerAs = 'NStepsContainer';

    interface INStepsContainerScope {
        steps: any
    }

    class NStepsContainer implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NStepsContainer();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        controller: NStepsContainerController = NStepsContainerController;
        restrict: string = 'EA';
        templateUrl: string = 'src/container/nStepsContainer.html';
        controllerAs: string = controllerAs;
        
        private linkFn(scope: any, element: any, attrs: any) {}
    }

    class NStepsContainerController {
        private step: INStep;
        private steps: Array<INStep>;

        static $inject: Array<string> = ['NStepsService'];
        constructor(private NStepsService: any) {}
    }

    angular
        .module('nSteps')
        .directive('nStepsContainer', NStepsContainer.instance);
}