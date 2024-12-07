import difference from "../difference"

describe("difference", () => {
    it("should return difference between two arrays", () => {
        expect(difference([1, 2], [2, 3])).toEqual([1])
    })

    it("should return difference between multiple arrays", () => {
        expect(difference([1, 2, 4, 12, 29], [1, 12], [29])).toEqual([2, 4])
    })

    it("should return empty array when comparing two identical arrays", () => {
        expect(difference([1, 16, 45], [1, 16, 45])).toEqual([])
    })

    it("should return empty array when comparing to empty array", () => {
        expect(difference([], [1, 7])).toEqual([])
    })

    it("should return original array when comparing to empty array", () => {
        expect(difference([0, 17], [])).toEqual([0, 17])
    })

    it("duplicate values in main array", () => {
        expect(difference([1, 2, 2, 4], [2])).toEqual([1,4])
    })

    it("duplicate values in the exclusion array", () => {
        expect(difference([1, 6, 12, 17], [1, 1, 12])).toEqual([6, 17])
    })

    it("should not modify the original array", () => {
        const testArray = [1, 5, 57]
        difference(testArray, [5])
        expect(testArray).toEqual([1, 5, 57])
    })
})