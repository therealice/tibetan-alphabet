import { expect } from 'chai';
import { row, col, entries, entry } from '../src/index';

describe('#Entry function', function() {
    it('We should be able any one character entry. Testing row 1, col 1', function() {
        const result = entry(1, 1);
        expect(result.text).to.equal('ཀ');
    });

    it('We should be able any one character entry. Testing row 8, col 2', function() {
        const result = entry(8, 2);
        expect(result.text).to.equal('ཨ');
    });

    it('Getting an entry that does not exist should result in null. Testing row 9', function() {
        const result = entry(9, 1);
        expect(result).to.equal(null);
    });

    it('Getting an entry that does not exist should result in null. Testing column 5', function() {
        const result = entry(1, 5);
        expect(result).to.equal(null);
    });
});

describe('#Row function', function() {
    it('The number of characters in row 1 should be 4', function() {
        const result = row(1);
        expect(result.length).to.equal(4);
    });

    it('The number of characters in row 2 should be 4', function() {
        const result = row(2);
        expect(result.length).to.equal(4);
    });

    it('The number of characters in row 3 should be 4', function() {
        const result = row(3);
        expect(result.length).to.equal(4);
    });

    it('The number of characters in row 4 should be 4', function() {
        const result = row(4);
        expect(result.length).to.equal(4);
    });

    it('The number of characters in row 5 should be 4', function() {
        const result = row(5);
        expect(result.length).to.equal(4);
    });

    it('The number of characters in row 6 should be 4', function() {
        const result = row(6);
        expect(result.length).to.equal(4);
    });
    
    it('The number of characters in row 7 should be 4', function() {
        const result = row(7);
        expect(result.length).to.equal(4);
    });

    it('The number of characters in row 8 should be 2', function() {
        const result = row(8);
        expect(result.length).to.equal(2);
    });

    it('Get all rows by matching list. Testing rows 1, 2, 8', function() {
        const result = row([1, 2, 8]);
        expect(result.length).to.equal(3);
    });
});

describe('#Col function', function() {
    it('The number of characters in column 1 should be 8', function() {
        const result = col(1);
        expect(result.length).to.equal(8);
    });

    it('The number of characters in column 2 should be 8', function() {
        const result = col(2);
        expect(result.length).to.equal(8);
    });

    it('The number of characters in column 3 should be 7', function() {
        const result = col(3);
        expect(result.length).to.equal(7);
    });

    it('The number of characters in column 4 should be 7', function() {
        const result = col(4);
        expect(result.length).to.equal(7);
    });

    it('Get all rows by matching list. Testing columns 1, 2, 4', function() {
        const result = col([1, 2, 4]);
        expect(result.length).to.equal(3);
    });
});

describe('#Entries function', function() {
    it('The total number of characters should be 30', function() {
        const result = entries();
        expect(result.length).to.equal(30);
    });

    it('We should be able to get the first character by row and col using filter', function() {
        const result = entries().filter(char => char.row === 1 && char.col === 1);
        expect(result[0].text).to.equal('ཀ');
    });
});