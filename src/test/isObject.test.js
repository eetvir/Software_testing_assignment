import isObject from "../isObject.js"

describe("isObject", () => {
    test("should return true for plain objects", () => {
        expect(isObject({})).toBe(true)
    })

    test("should return true for arrays", () => {
        expect(isObject([1,2,3])).toBe(true)
    })

    test("should return true for functions", () => {
        expect(isObject(() => {})).toBe(true)
    })

    test("should return false for null", () => {
        expect(isObject(null)).toBe(false)
    })

    test("should return false for numbers", () => {
        expect(isObject(29)).toBe(false)
    })

    test("should return false for strings", () => {
        expect(isObject("test")).toBe(false)
    })

    test("should return false for booleans", () => {
        expect(isObject(true)).toBe(false)
    })

    test("should return true for new Object()", () => {
        expect(isObject(new Object())).toBe(true)
    })

    test("should return true for new String()", () => {
        expect(isObject(new String(""))).toBe(true)
    })

    test("should return true for new Number()", () => {
        expect(isObject(new Number(12))).toBe(true)
    })

    test("should return true for regexes", () => {
        expect(isObject(/abc/)).toBe(true)
    })
})