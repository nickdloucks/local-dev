const input: Array<Array<number>> = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

let maxGlassSum = 0;
let runningSum = 0;

let yCoors: number[] = [0,0,0,1,2,2,2];
let xCoors: number[] = [0,1,2,1,0,1,2];

function incCoors(coorsList: Array<number>){
    for(let i=0; i<coorsList.length; i++){
        coorsList[i]++; // increment each coordinate 
    }
}
function decCoors(coorsList: Array<number>){
    for(let i=0; i<coorsList.length; i++){
        coorsList[i] -= 4; // reset coordinates
    }
}


for(let i=0; i<=7; i++){
    let y = yCoors[i];
    let x = xCoors[i];

    runningSum += input[y][x];
}

console.log(runningSum);