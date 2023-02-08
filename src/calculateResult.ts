export default function calculateResult(fare: number, userGaavo: number[]): number[] {
    const length = userGaavo.length;
    const intermediateResult: boolean[][] = []; //2D array to store intermediate results
    for (let i = 0; i <= length; i++) {
        intermediateResult[i] = Array(fare + 1).fill(false);
        intermediateResult[i][0] = true;
    }
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= fare; j++) {
            if (userGaavo[i - 1] > j) {
                intermediateResult[i][j] = intermediateResult[i - 1][j];
            } else {
                intermediateResult[i][j] = intermediateResult[i - 1][j] || intermediateResult[i - 1][j - userGaavo[i - 1]];
            }
        }
    }
    if (!intermediateResult[length][fare]) { // if it is not possible to make fare, return empty array
        return [];
    }
    const combination: number[] = []; // store combination of numbers that add up to the sum
    let i = length;
    let j = fare;
    while (i > 0 && j > 0) {
        if (intermediateResult[i][j] !== intermediateResult[i - 1][j]) {
            combination.push(userGaavo[i - 1]); // if the current piece was used, add it to the combination 
            j -= userGaavo[i - 1]; // subtract the piece from the sum
        }
        i--;
    }
    return combination.reverse(); // return the combination
};


/* 
    The time complexity of 'calculateResult' is O(n * fare)
    Where 'n' is the number of elements in the 'userGaavo' array.

    This is completely over-optimized and it definitely does not need to be this complex, but the challenge was to aim for performance!
**/