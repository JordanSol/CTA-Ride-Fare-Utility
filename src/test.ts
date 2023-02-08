import {assert} from 'chai'
import { describe, it } from 'node:test'
import calculateResult from './calculateResult'

describe('Fare Checker', () => {
    it("should pass and return an array of 2 and 5 from the array [2,5,6,9] with the fare price of 7", () => {
        const result = calculateResult(7, [2,5,6,9]);
        console.log(result);
        assert.deepEqual(result, [2,5])
    
    })

    it("should pass and return an array of 3, 3, and 9 from the array [7, 8, 3, 3, 4, 9] with the fare price of 15", () => {
        const result = calculateResult(15, [7, 18, 3, 3, 4, 9]);
        console.log(result)
        assert.deepEqual(result, [3,3,9])
    })

    it("should fail and return an array of []", () => {
        const result = calculateResult(15, [2, 5]);
        console.log(result)
        assert.deepEqual(result, [])
    })
});

