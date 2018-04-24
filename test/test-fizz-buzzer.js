// import Chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer.js
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

	// normal case testing
	it('should return \'fizz-buzz\' for numbers divisible by 15', function() {
		const normalCasesFizzBuzz = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 30, expected: 'fizz-buzz'},
			{num: 45, expected: 'fizz-buzz'}
		];

		normalCasesFizzBuzz.forEach(function(input) {
			const answerFizzBuzz = fizzBuzzer(input.num);
			expect(answerFizzBuzz).to.equal(input.expected);
		});
	});

	it('should return \'fizz\' for numbers divisible by 3 but not 5', function() {
		const normalCasesFizz = [
			{num: 3, expected: 'fizz'},
			{num: 6, expected: 'fizz'},
			{num: 9, expected: 'fizz'}
		];

		normalCasesFizz.forEach(function(input) {
			const answerFizz = fizzBuzzer(input.num);
			expect(answerFizz).to.equal(input.expected);
		});
	});

	it('should return \'buzz\' for numbers divisible by 5 but not 3', function() {
		const normalCasesBuzz = [
			{num: 5, expected: 'buzz'},
			{num: 10, expected: 'buzz'},
			{num: 20, expected: 'buzz'}
		];

		normalCasesBuzz.forEach(function(input) {
			const answerBuzz = fizzBuzzer(input.num);
			expect(answerBuzz).to.equal(input.expected);
		});
	});

	// edge case testing
	it('should raise error if arguments are not numbers', function() {
		const badInputs = ['a', '5', false, true, null];

		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input[]);
			}).to.throw(Error);
		});
	});
});