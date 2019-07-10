const add = (a,b) => a + b;

test('1+2=3', () => {

    const result = add(1,2);
    // throw new Error('dsdsds')
    expect(result).toBe(3);
});
