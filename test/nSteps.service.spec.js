'use strict';

describe('NStepsService', () => {

	const templateRequiredError = 'Template is required!!!';
	const templateEmptyError 	= 'Template cannot be empty!!!';
	const typeofStepError 		= 'Step needs to be an object!!!';
	const steps 				= [
		{
			name: 'Step 1',
			template: 'templateOne.html'
		},
		{
			name: 'Step 2',
			template: 'templateTwo.html'
		},
		{
			name: 'Step 3',
			template: 'templateThree.html'
		}
	];

	let NStepsService;

	beforeEach(() => {
		angular.module('nSteps.templates', []);
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
		const step 					= steps[0];

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
		NStepsService.init(steps);

		expect(NStepsService.steps.length).toEqual(currentAmountOfSteps + steps.length);
	});

	it('Should reset to defaults before, initializing new steps', () => {
		NStepsService.init(steps);
		NStepsService.init(steps);
		
		expect(NStepsService.steps.length).toEqual(steps.length);
	});

	it('Should set current step, to first step', () => {
		NStepsService.init(steps);
		const actual = NStepsService.currentStep;
		
		expect(actual.name).toEqual(steps[0].name);
		expect(actual.template).toEqual(steps[0].template);
	});

	it('Should go to next step', () => {
		NStepsService.init(steps);
		NStepsService.nextStep();

		const actual = NStepsService.currentStep;

		expect(actual.name).toEqual(steps[1].name);
		expect(actual.template).toEqual(steps[1].template);
	});

	it('Should stay on current step, if current step is the last step', () => {
		NStepsService.init(steps);
		NStepsService.nextStep();
		NStepsService.nextStep();

		const actual 	= NStepsService.currentStep;
		const expected 	= steps[steps.length - 1];

		expect(actual.name).toEqual(expected.name);
		expect(actual.template).toEqual(expected.template);
	});

	it('Should return current step, when going to next step', () => {
		NStepsService.init(steps);

		const actual 	= NStepsService.nextStep();
		const expected 	= NStepsService.currentStep;

		expect(actual).toEqual(expected);
	});

	it('Should go to previous step', () => {
		NStepsService.init(steps);
		NStepsService.nextStep();
		NStepsService.previousStep();

		const actual = NStepsService.currentStep;

		expect(actual.name).toEqual(steps[0].name);
		expect(actual.template).toEqual(steps[0].template);
	});

	it('Should stay on current step, if current step is the first step', () => {
		NStepsService.init(steps);

		expect(() => NStepsService.previousStep() ).not.toThrow();
		expect(NStepsService.currentStep.name).toEqual(steps[0].name);
		expect(NStepsService.currentStep.template).toEqual(steps[0].template);
	});

	it('Should go to specified step index', () => {
		NStepsService.init(steps);

		expect(() => NStepsService.changeStep(1) ).not.toThrow();
		expect(NStepsService.currentStep.name).toEqual(steps[1].name);
		expect(NStepsService.currentStep.template).toEqual(steps[1].template);
	});

	it('Should go to last step, if index more than amount of steps', () => {
		NStepsService.init(steps);

		expect(() => NStepsService.changeStep(steps.length) ).not.toThrow();

		const actual = NStepsService.currentStep;
		const expected = steps[steps.length - 1];

		expect(actual.name).toEqual(expected.name);
		expect(actual.template).toEqual(expected.template);
	});

	it('Should go to first step, if index is less than 0', () => {
		NStepsService.init(steps);

		expect(() => NStepsService.changeStep(-1) ).not.toThrow();
		expect(NStepsService.currentStep.name).toEqual(steps[0].name);
		expect(NStepsService.currentStep.template).toEqual(steps[0].template);
	});
});