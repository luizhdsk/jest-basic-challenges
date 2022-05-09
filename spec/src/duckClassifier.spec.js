const duckClassifier = require('../../src/duckClassifier');

describe('Given is a duck method', () => {
    describe('When isDuck is called', () => {
        describe('And the creature is a duck', () => {
            it('Then returns true ', () => {
                expect(duckClassifier(true, true, true)).toBeTruthy();
            });
        });

        describe('And the creature is not a duck', () => {
            describe('And the creature is a pigeon', () => {
                it('Then returns false ', () => {
                    expect(duckClassifier(true, true, false)).toBeFalsy();
                });
            });
            
            describe('And the creature is a heron', () => {
                it('Then returns false ', () => {
                    expect(duckClassifier(true, false, true)).toBeFalsy();
                });
            });
            
            describe('And the creature is a cat', () => {
                it('Then returns false ', () => {
                    expect(duckClassifier(false, true, true)).toBeFalsy();
                });
            });
        });

    })

});