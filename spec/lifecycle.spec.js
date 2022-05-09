beforeAll(() => {
    console.log('Now i print number 2!');
});

beforeEach(() => {
    console.log('Now i print number 5!');
});

afterEach(() => {
    console.log('Now i print number 11!');
});

afterAll(() => {
    console.log('Now i print number 14!');
});

describe('Given', () => {
    console.log('Now i print number 0!');

    beforeAll(() => {
        console.log('Now i print number 3!');
    });

    beforeEach(() => {
        console.log('Now i print number 6!');
    });

    afterEach(() => {
        console.log('Now i print number 10!');
    });

    afterAll(() => {
        console.log('Now i print number 13!');
    });

    describe('When', () => {
        console.log('Now i print number 1!');

        beforeAll(() => {
            console.log('Now i print number 4!');
        });
    
        beforeEach(() => {
            console.log('Now i print number 7!');
        });
    
        afterEach(() => {
            console.log('Now i print number 9!');
        });
    
        afterAll(() => {
            console.log('Now i print number 12!');
        });
        
        it('Then', () => {
            console.log('Now i print number 8!');
        });
    });
});