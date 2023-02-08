"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const calculateResult_1 = __importDefault(require("./calculateResult"));
function main() {
    // Collect and store the fare price as a number, remove "G" if necessary
    const farePrice = Number((0, readline_sync_1.question)("Enter fare price: \n").replace("G", ""));
    const getIntArray = () => {
        // Store user reply as an array of strings
        const userGaavoStr = (0, readline_sync_1.question)("Enter your Gaavo pieces: \n").split(" ");
        return userGaavoStr.map((x) => {
            // Remove the letter 'G' and convert the variable to a number, if it becomes a number, return it
            const y = x.replace("G", "");
            const z = Number(y);
            if (z) {
                return z;
            }
            else {
                return 0;
            }
        });
    };
    // Return the int array of user's Gaavo pieces
    const userGaavo = getIntArray();
    const result = (0, calculateResult_1.default)(farePrice, userGaavo);
    // check if the result is not []
    if (result.length) {
        // Return the correct pieces to make fare to the user
        console.log(`You can make fare with the following Gaavo pieces:${result.map((x) => " " + x + "G ").join()}`);
    }
    else {
        // The user cannot make fare
        console.log("You cannot make fare.");
    }
}
;
main();
