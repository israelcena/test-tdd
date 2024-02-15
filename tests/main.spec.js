/* eslint-disable */
var expect = require('chai').expect;

describe('Main', () => {
    let myArr
    before(() => {
        myArr = [1,2,3,];
    });
    context('Case Arr Test', () => {
        // smoke test
        it('should be an array', () => {
            expect(myArr).to.be.a('array');
        });

        it('should not have a size of 3', () => {
            expect(myArr).to.not.lengthOf(4);
        });

        it('should have a size of 4 when push another value to the array', () => {
            myArr.push(4);
            expect(myArr).to.have.lengthOf(4);
        });

        it('should not have a size of 3', () => {
            myArr.splice(myArr.indexOf(3),1);
            expect(myArr).to.not.include(3);
        });
        
        it('should have a size of 2', () => {
            myArr.pop();
            expect(myArr).to.have.lengthOf(2);
        });
    });
    context('Case 2', () => {
        it.skip('should skip', () => {
            throw new Error('Pulou!')
        });
    });
});
