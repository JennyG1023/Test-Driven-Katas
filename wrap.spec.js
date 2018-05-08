const { expect } = require('chai');
const wrap = require('./wrap');

describe('A wrap function', () => {
    it('returns an empty string if empty string was provided', () => {
        const myWrap = wrap('', 3);
        expect(myWrap).to.equal(
            ''
        );
    })
    it('takes two arguments and returns a string', () => {
        const myWrap = wrap('Hello, world', 3);
        expect(myWrap).to.equal(
            'Hel\nlo,\n wo\nrld\n'
        );
    })
})
