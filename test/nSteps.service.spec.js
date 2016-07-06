'use strict';

describe('NStepsService', () => {

	const templateRequiredError = 'Template is required!!!';
	const templateEmptyError = 'Template cannot be empty!!!';
	const typeofStepError = 'Step needs to be an object!!!';

	let NStepsService;

	beforeEach(() => {
		angular.module('templates', []);
		module('nSteps');
	});

	beforeEach(inject((_NStepsService_) => {
		NStepsService = _NStepsService_;
	}));

	it('Should return steps', () => {
		expect(NStepsService.steps.length).toEqual(0);
	});

	it('Should create step', () => {
		const currentAmountOfSteps 	= NStepsService.steps.length;
		const step 					= {
			name	: 'Step 1',
			template: 'template.html'
		};

		NStepsService.createStep(step);

		const actual = NStepsService.steps[NStepsService.steps.length - 1];

		expect(NStepsService.steps.length).toEqual(currentAmountOfSteps + 1);
		expect(actual.name).toEqual(step.name);
		expect(actual.template).toEqual(step.template);
	});

	// NStep Class
	it('Should throw an error, if nothing is passed to the class', () => {
		expect(NStepsService.createStep).toThrow(typeofStepError);
	});

	it('Should throw an error, if passed parameter is empty', () => {
		expect( () => NStepsService.createStep('') ).toThrow(typeofStepError);
	});

	it('Should throw an error, if passed parameter is not an object', () => {
		expect( () => NStepsService.createStep('test') ).toThrow(typeofStepError);
	});

	it('Should throw an error, if passed object does not include a template', () => {
		expect( () => NStepsService.createStep({}) ).toThrow(templateRequiredError);
	});

	it('Should throw an error, if passed object include a empty template string', () => {
		expect( () => NStepsService.createStep({template: ''}) ).toThrow(templateEmptyError);
	});
	// END OF NStep Class

	it('Should create steps', () => {
		const currentAmountOfSteps 	= NStepsService.steps.length;
		const steps = [
			{
				name: 'Step 1',
				template: 'templateOne.html'
			},
			{
				name: 'Step 2',
				template: 'templateTwo.html'
			}
		];

		NStepsService.createSteps(steps);

		expect(NStepsService.steps.length).toEqual(currentAmountOfSteps + steps.length);
	});

	it('Should set current step, to first step', () => {
		const steps = [
			{
				name: 'Step 1',
				template: 'templateOne.html'
			},
			{
				name: 'Step 2',
				template: 'templateTwo.html'
			}
		];

		NStepsService.createSteps(steps);
		const actual = NStepsService.currentStep;
		
		expect(actual.name).toEqual(steps[0].name);
		expect(actual.template).toEqual(steps[0].template);
	});

	it('Should go to next step', () => {
		const steps = [
			{
				name: 'Step 1',
				template: 'templateOne.html'
			},
			{
				name: 'Step 2',
				template: 'templateTwo.html'
			}
		];

		NStepsService.createSteps(steps);
		NStepsService.nextStep();

		const actual = NStepsService.currentStep;

		expect(actual.name).toEqual(steps[1].name);
		expect(actual.template).toEqual(steps[1].template);
	});

	it('Should stay on current step, if current step is the last step', () => {
		expect(0).toEqual(1);
	});

	it('Should throw error if step does not exist', () => {
		expect(0).toEqual(1);
	});

	it('Should prevent going to next step, if step is invalid', () => {
		expect(0).toEqual(1);
	});

	it('Should go to previous step', () => {
		expect(0).toEqual(1);
	});

	it('Should stay on current step, if current step is the first step', () => {
		expect(0).toEqual(1);
	});

	it('Should go to specified step', () => {
		expect(0).toEqual(1);
	});
});