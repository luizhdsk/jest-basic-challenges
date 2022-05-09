const helper = require('../../src/helper');

describe('Given a helper method', () => {
    describe('And a sum method', () => {
        describe('When i have a = 3 and b = 4', () => {
            let a = 3;
            let b = 4;
    
            it('Then result is 7', () => {
                expect(helper.sum(a, b)).toBe(7);
            })
        });
    
    });
    
    describe('When a ramdon number above 3 return method', () => {
        it('Then should return true', () => {
            expect(helper.randomAbove3()).toBeGreaterThan(3);
        })
    
    });
    
    describe('When a boolean true return method', () => {
        it('Then should return true', () => {
            expect(helper.returnTrue()).toBeTruthy();
        })
    
    });
    
    describe('When a boolean false return method', () => {
        it('Then should return false', () => {
            expect(helper.returnFalse()).toBeFalsy();
        })
    
    });
    
    describe('When a undefined return method', () => {
        it('Then should return true', () => {
            expect(helper.returnUndefined()).toBeUndefined();
        })
    
    });

    describe('When a builder method', () => {
        const expectReturn = {
            name: 'Joao',
            surname: 'Silva',
            birth: '01-01-1980',
        };

        it('Then should Jão data', () => {
            console.log(helper.builder);
            expect(helper.builder()).toMatchObject(expectReturn);
        })
    
    });

    describe('When a merger method', () => {
        const luizOjb = {
            name: 'Luiz',
        };

        it('Then should validate name property', () => {
            expect(helper.merger(luizOjb).name).toMatch(luizOjb.name);
        })
    
    });

    describe('When a concat random string method', () => {
        const str = 'ramdom str';

        it('Then should constain string', () => {
            expect(helper.concatRandomString(str)).toEqual(expect.stringContaining(str));
        })
    
    });

    describe('When a concat random array method', () => {
        const randomArray = ['ramdom', [1]];

        it('Then should contain array', () => {
            expect(helper.concatRandomArray(randomArray)).toEqual(expect.arrayContaining(randomArray));
        })
    
    });

    describe('When a thrower method', () => {
        it('Then validate errror', () => {
            expect(helper.thrower).toThrow(Error);
        })
    
    });

    describe('When another thrower method', () => {
        const errorMessage = "ERROR";

        it('Then validate a custom error', () => {
            expect(() => helper.thrower2(new TypeError(errorMessage))).toThrowError(errorMessage);
        })
    
    });
})