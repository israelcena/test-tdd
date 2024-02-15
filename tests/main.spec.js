/* eslint-disable */
describe('Main', () => {
    context('Case 1', () => {
        it('should', () => {
            throw new Error('Falhou!')
        });
    });
    context('Case 2', () => {
        it('should 2', () => {
            return true;
        });

        it.skip('should skip', () => {
            throw new Error('Pulou!')
        });
    });
});
