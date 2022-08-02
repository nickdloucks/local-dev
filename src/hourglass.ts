const input = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

// Main program:
function getMaxGlassSum(grid: Array<Array<number>>){
    let maxGlassSum = 0;
    let runningSum = 0;

    // This initial coordinate graph defines the shape of an hourglass within a 2D array/matrix:
    let yCoors: number[] = [0,0,0,1,2,2,2];
    let xCoors: number[] = [0,1,2,1,0,1,2];

    // EXAMPLE:
    // [
    //  [0,0], [0,1], [0,1]
    //          [1,1]
    //  [2,0], [2,1], [2,2]
    // ]
    // ^ These are the coordinates of each element in the first Hourglass in the matrix (in the "upper left" corner)
    
    // The values would be:
    // [1,1,1]
    //   [1]
    // [1,1,1]

    // For comparison, the values of the Hourglass at the "bottom right" corner of the input matrix would be:
    // [4,4,0]
    //   [0]
    // [2,4,0]

    // Coordinate adjustment subroutines:
    function incCoors(coorsList: Array<number>){
        for(let i = 0; i < coorsList.length; i++){
            coorsList[i]++; // increment each coordinate 
        }
    }
    function resetCoors(coorsList: Array<number>){
        for(let i = 0; i < coorsList.length; i++){
            coorsList[i] -= 4; // reset coordinates
        }
    }

    // Subroutine to total a single Hourglass:
    function sumGlass(): void{
        for(let i = 0; i <= 7; i++){
            let y = yCoors[i]; // Use the x and y coordinates to get the value of the 7 elements in any Hourglass
            let x = xCoors[i];

            runningSum += grid[y][x]; // Add up the value of the 7 elements in the current Hourglass
        }
        maxGlassSum = (runningSum > maxGlassSum) ? runningSum : maxGlassSum;
        console.log("Sum of current Hourglass: " + runningSum);
        console.log("Current maximum: " + maxGlassSum);
    }

    for(let i = 1; i <= 4; i++){
        for(let j = 1; j <= 4; j++){
            sumGlass(); // Get the sum of each of the four Hourglasses in a row
            incCoors(xCoors);
        }
        resetCoors(xCoors); // Move down to the next row and get the sum of each of those Hourglasses
        incCoors(yCoors);
    }

    return maxGlassSum;
}

getMaxGlassSum(input);