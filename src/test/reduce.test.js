import reduce from "../reduce"

describe("reduce", () => {
    test("should sum array of numbers with accumulator", () => {
        const result = reduce([1, 2], (sum, n) => sum + n, 0)
        expect(result).toBe(3)
    })

    test("should handle an empty array", () => {
        const result = reduce([], (sum, n) => sum + n, 0)
        expect(result).toBe(0)
      })

    test("should return undefined for empty array without accumulator", () => {
        const result = reduce([], (sum, n) => sum + n)
        expect(result).toBeUndefined()
    })

    test("should join strings from array", () => {
        const result = reduce(["k", "i", "s", "s", "a"], (acc, char) => acc + char, "")
        expect(result).toBe("kissa")
    })

    test("should handle non-array and non-object collections", () => {
        const result = reduce(null, (acc, value) => acc + value, 0)
        expect(result).toBe(0)
    })

    test("should handle mixed data types", () => {
        const collection = [1, "2", 3]
        const result = reduce(collection, (acc, value) => acc + Number(value), 0)
        expect(result).toBe(6)
    })

    test("should group object values into arrays based on their keys", () => {
        const collection = { a: 1, b: 2, c: 1 }
        const result = reduce(collection, (result, value, key) => {
          (result[value] || (result[value] = [])).push(key)
          return result
        }, {})
        expect(result).toEqual({ 1: ["a", "c"], 2: ["b"] })
    })

    test("should reduce nested object to flattened structure", () => {
        const collection = { a: { x: 1 }, b: { x: 2 }, c: { x: 3 } }
        const result = reduce(collection, (acc, value, key) => {
          acc[key] = value.x
          return acc
        }, {})
        expect(result).toEqual({ a: 1, b: 2, c: 3 })
    })
})