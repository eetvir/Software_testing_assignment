import filter from "../filter";

describe("filter", () => {
    test("should return empty array when empty array is used as input", () => {
        const array = []
        const predicate = (value) => value > 0
        expect(filter(array, predicate)).toEqual([[]])
    })
    
    test("filter even numbers", () => {
        const array = [1, 2, 3, 4]
        const predicate = (number) => number % 2 === 0
        expect(filter(array, predicate)).toEqual([2, 4])
    })

    test("should return empty array if no elements match the predicate", () => {
        const array = [1, 3, 5]
        const predicate = (number) => number % 2 === 0
        expect(filter(array, predicate)).toEqual([[]])
    })

    test("filter arrays with duplicate values", () => {
        const array = [1, 2, 2, 6]
        const predicate = (number) => number === 2
        expect(filter(array, predicate)).toEqual([2, 2])
    })

    test("should handle arrays with non-primitive values", () => {
        const array = [{a: 1}, {a: 2}, {a: 3}]
        const predicate = (obj) => obj.a > 2
        expect(filter(array, predicate)).toEqual([{ a: 3 }])
    })

    test("should handle objects with a predicate", () => {
        const users = [
            {user: "barney", active: true},
            {user: "fred", active: false}
        ]
        const predicate = ({active}) => active
        expect(filter(users, predicate)).toEqual([{user: "barney", active: true}])
    })
})