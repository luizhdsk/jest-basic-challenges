describe('Given concat method', () => {
    const concat = (firstArray, secondArray) => [].concat(firstArray).concat(secondArray);
    const testTable = [
        [['first', 'second'], ['last'], ['first', 'second', 'last']],
        [[1, 2], [3], [1, 2, 3]],
        [['one', 'two'], ['three'], ['one', 'two', 'three']],
        [[2, 3], [5], [2, 3, 5]],
        [[1, 1], [2], [1, 1, 2]]
    ]; 
        
    describe('When it is called', () => {
        test.each(testTable)('Then should concat %p with %p to result %p',
                (firstArray, secondArray, finalArray) => { 
                    expect(concat(firstArray, secondArray)).toEqual(finalArray); 
                });
    });
});
