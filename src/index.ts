import { question } from 'readline-sync'
import calculateResult from './calculateResult';

function main(): void {
    // Collect and store the fare price as a number, remove "G" if necessary
    const farePrice: number = Number(question("Enter fare price: \n").replace("G",""));

    const getIntArray: ()=>(number)[] = () => {
        // Store user reply as an array of strings
        const userGaavoStr: string[] = question("Enter your Gaavo pieces: \n").split(" ");
        return userGaavoStr.map((x) => {
            // Remove the letter 'G' and convert the variable to a number, if it becomes a number, return it
            const y = x.replace("G", "")
            const z = Number(y);
            if (z) {
                return z
            } else {
                return 0
            }
        })
    };

    // Return the int array of user's Gaavo pieces
    const userGaavo = getIntArray();
    const result = calculateResult(farePrice, userGaavo);
    // check if the result is not []
    if (result.length) {
        // Return the correct pieces to make fare to the user
        console.log(`You can make fare with the following Gaavo pieces:${result.map((x) => " " + x + "G ").join()}`)
    } else {
        // The user cannot make fare
        console.log("You cannot make fare.")
    }
};

main();