'use strict';

var expect = require('chai').expect;
var alphabet = require('../index');

describe('#alphabet', function() {
    it('we should be able to get the first character by row and col', function() {
        var result = alphabet.alphabet().filter(char => char.row === 1 && char.col === 1);
        expect(result[0].text).to.equal('ཀ');
    });

    it('we should not be able to get a character by row and col if it does not exist', function() {
        var result = alphabet.alphabet().filter(char => char.row === 1 && char.col === 5);
        expect(result.length).to.equal(0);
    });

    it('we should be able to get all the characters by row', function() {
        var result = alphabet.alphabet().filter(char => char.row === 1);
        expect(result.length).to.equal(4);
    });

    it('we should be able to get a character by the tibetan letter', function() {
        var result = alphabet.alphabet().filter(char => char.text === 'ཀ');
        expect(result[0].text).to.equal('ཀ');
    });
});