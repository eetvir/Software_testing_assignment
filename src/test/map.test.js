import map from "../map"

describe("map", () => {
    test("should handle empty array", () => {
        const square = (n) => n * n
        const result = map([], square)
        expect(result).toEqual([])
    })

    test("should handle null or undefined input gracefully", () => {
        const square = (n) => n * n
        expect(map(null, square)).toEqual([])
        expect(map(undefined, square)).toEqual([])
      })

    test("should apply iteratee to each element", () => {
        const square = (n) => n * n
        const result = map([4, 8], square)
        expect(result).toEqual([16, 64])
    })

    test("should work correctly with objects in array", () => {
        const pickName = (obj) => obj.name
        const input = [{ name: "Kalle" }, { name: "Pekka" }, { name: "Jorma" }]
        const result = map(input, pickName)
        expect(result).toEqual(["Kalle", "Pekka", "Jorma"])
    })

    test("should handle empty entry in array", () => {
        const empty = [1, , 3]
        const iteratee = (value) => (value !== undefined ? value * 2 : "empty")
        const result = map(empty, iteratee)
        expect(result).toEqual([2, "empty", 6])
    })
    
    test("should work with different data types", () => {
        const string = (value) => String(value)
        const result = map([1, "kissa", true, null], string)
        expect(result).toEqual(["1", "kissa", "true", "null"])
    })

    test("should return same length as the input", () => {
        const id = (x) => x
        const input = [1, 2, 3, 4, 5]
        const result = map(input, id)
        expect(result.length).toBe(input.length)
    })
})