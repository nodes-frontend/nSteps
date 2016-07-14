namespace nSteps {
    'use strict';

    export interface INStep {
        name: string;
        template: string;
    }

    class NStep implements INStep {
        private name: string;
        private template: string;

        constructor(step: INStep) {
            this.validate(step);
            this.name       = step.name;
            this.template   = step.template;
        }

        private validate(step: INStep) {
            // Check if step isset && if step is an object
            if(!step || typeof step !== 'object') throw 'Step needs to be an object!!!';

            // Check if step has a template property
            if( !step.hasOwnProperty('template') ) throw 'Template is required!!!';

            // Check if step.template is empty
            if(step.template === '') throw 'Template cannot be empty!!!';
        }
    }

    export interface INStepsService {
        steps: Array<INStep>;
        totalSteps: number;
        currentIndex: number;
        currentStep: INStep;
        init: (steps) => Array<INStep>;
        createStep: (step) => Array<INStep>;
        changeStep: (index) => INStep;
        nextStep: () => INStep;
        previousStep: () => INStep;
    }

    class NStepsService implements INStepsService {

        static $inject: Array<string> = ['$rootScope'];
        constructor(private $rootScope: any){}

        private steps: Array<INStep> = [];
        private totalSteps: number = 0;
        private currentIndex: number = 0;
        private currentStep: INStep;

        private createStep(step: INStep): Array<INStep> {
            const step = new NStep(step);

            // If no steps has been created yet, set currentStep
            if(this.steps.length === 0) {
                this.currentIndex   = 0;
                this.currentStep    = step;
            }

            this.steps.push(step);
            this.totalSteps++;

            return this.steps;
        }

        init(steps: Array<INStep>): Array<INStep> {
            this.reset();

            const self = this;
            steps.forEach((step) => {
                self.createStep(step);
            });
            return this.steps;
        }

        reset() {
            this.steps          = [];
            this.totalSteps     = 0;
            this.currentIndex   = 0;
            this.currentStep    = undefined;
        }

        changeStep(index = this.currentIndex): INStep {
            index = Math.max(0, index);
            index = Math.min(index, this.steps.length - 1);

            this.currentIndex   = index;
            this.currentStep    = this.steps[this.currentIndex];

            this.$rootScope.$apply();

            return this.currentStep;
        }

        nextStep(): INStep {
            this.currentIndex++;
            return this.changeStep();
        }

        previousStep(): INStep {
            this.currentIndex--;
            return this.changeStep();
        }
    }

    angular
        .module('nSteps')
        .service('NStepsService', NStepsService);
}

