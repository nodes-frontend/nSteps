namespace nSteps {
    'use strict';

    const controllerAs = 'NStepsChangeStep';

    class NStepsChangeStep implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NStepsChangeStep();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        controller: NStepsChangeStepController = NStepsChangeStepController;
        restrict: string = 'EA';
        controllerAs: string = controllerAs;

        private linkFn(scope: any, element: any, attrs: any) {
            element.on('click', () => {
                scope[controllerAs].change(attrs.index);
            });
        }
    }

    class NStepsChangeStepController {
        static $inject: Array<string> = ['NStepsService'];
        constructor(private NStepsService: INStepsService) {}

        change(index) {
            if(index === 'next') {
                this.NStepsService.nextStep();
            } else if(index === 'previous') {
                this.NStepsService.previousStep();
            } else {
                this.NStepsService.changeStep(index);
            }
        }
    }

    angular
        .module('nSteps')
        .directive('nStepsChangeStep', NStepsChangeStep.instance);
}