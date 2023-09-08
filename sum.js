function sum(a, b) {
	if (typeof a !== "number") return 'error'
	if (typeof b !== "number") return 'error'
	return a + b
}

module.exports = sum
