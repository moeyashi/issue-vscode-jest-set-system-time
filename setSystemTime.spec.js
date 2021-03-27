describe(jest.setSystemTime, () => {
    test('can set new Date', () => {
        jest.useFakeTimers('modern')
        jest.setSystemTime(new Date('2020-02-03'))
        const actual = new Date()
        expect(actual.getFullYear()).toBe(2020)
        expect(actual.getMonth()).toBe(1)
        expect(actual.getDate()).toBe(3)
        jest.useRealTimers()
    })
})