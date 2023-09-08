const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1,2)).toBe(3)
	expect(sum(5, 5)).toBe(10)
	expect(sum(5, 10)).toBe(15)
})

test('check string input', () => {
	expect(sum("string", 5)).toBe('error')
})
