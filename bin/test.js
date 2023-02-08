"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const node_test_1 = require("node:test");
const calculateResult_1 = __importDefault(require("./calculateResult"));
(0, node_test_1.describe)('Fare Checker', () => {
    (0, node_test_1.it)("should pass and return an array of 2 and 5 from the array [2,5,6,9] with the fare price of 7", () => {
        const result = (0, calculateResult_1.default)(7, [2, 5, 6, 9]);
        console.log(result);
        chai_1.assert.deepEqual(result, [2, 5]);
    });
    (0, node_test_1.it)("should pass and return an array of 3, 3, and 9 from the array [7, 8, 3, 3, 4, 9] with the fare price of 15", () => {
        const result = (0, calculateResult_1.default)(15, [7, 18, 3, 3, 4, 9]);
        console.log(result);
        chai_1.assert.deepEqual(result, [3, 3, 9]);
    });
    (0, node_test_1.it)("should fail and return an array of []", () => {
        const result = (0, calculateResult_1.default)(15, [2, 5]);
        console.log(result);
        chai_1.assert.deepEqual(result, []);
    });
});
