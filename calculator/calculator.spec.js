const calculator = require("./calculator")
describe("calculator unit tests", () => {
    it("adds", () => {
        expect(calculator.add(2, 2)).toBe(4)
        expect(calculator.add(2, 3)).toBe(5)
        expect(calculator.add(1, 0)).toBe(1)
        expect(calculator.add(-1, 1)).toBe(0)
        expect(calculator.add(1)).toBe(1)
        expect(calculator.add()).toBe(0)
        expect(calculator.add(2, 2, 2)).toBe(6)
        expect
    })
    it("subtracts", () => {
        expect(calculator.subtract(2, 2)).toBe(0)
        expect(calculator.subtract(2, 3)).toBe(-1)
        expect(calculator.subtract(1, 0)).toBe(1)
        expect(calculator.subtract(-1, 1)).toBe(-2)
        expect(calculator.subtract(-1, -2)).toBe(1)
        expect(calculator.subtract(1)).toBe(1)
        expect(calculator.subtract()).toBe(0)
    })
    it("multiplies", () => {
        expect(calculator.multiply(2, 2)).toBe(4)
        expect(calculator.multiply(2, 3)).toBe(6)
        expect(calculator.multiply(1, 0)).toBe(0)
        expect(calculator.multiply(-1, 1)).toBe(-1)
        expect(calculator.multiply(1)).toBe(0)
        expect(calculator.multiply()).toBe(0)
    })
    it("divides", () => {
        expect(calculator.divide(2, 2)).toBe(1)
        expect(calculator.divide(3, 2)).toBe(1.5)
        expect(calculator.divide(1, 0)).toBe(0)
        expect(calculator.divide(-1, 1)).toBe(-1)
        expect(calculator.divide(1)).toBe(1)
        expect(calculator.divide()).toBe(1)
        expect(() => calculator.divide("hello", "world")).toThrow()
    })
})
