import { expect } from 'chai';
import fizzBuzz from '../src/fizzBuzz';

/* eslint-disable */
describe('FizzBuzz', () => {
    // smoke tests
    it('should exist the FizzBuzz', () => {
        expect(fizzBuzz).to.exist;
    })

    it('should return `Fizz` when multiple 3', () => {
        expect(fizzBuzz(3)).to.be.equal('Fizz');
    })

    it('should return `Fizz` when multiple 3', () => {
        expect(fizzBuzz(6)).to.be.equal('Fizz');
    })

    it('should return `Buzz` when multiple 5', () => {
        expect(fizzBuzz(5)).to.be.equal('Buzz');
    })

    it('should return `Buzz` when multiple 5', () => {
        expect(fizzBuzz(25)).to.be.equal('Buzz');
    })

    it('should return `FizzBuzz` when multiple 3 and 5', () => {
        expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    })

    it('should return `num` when no multiple 3 and 5', () => {
        const num = 121;
        expect(fizzBuzz(num)).to.be.equal(num);
    })
});
