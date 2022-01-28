let changePile = [];
let $stillDue = 87.68;
const MONEY = [ // money value data stored in array so the recursive function can process it in order of value
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1.00],
    ["FIVE", 5.00],
    ["TEN", 10.00],
    ["TWENTY", 20.00],
    ["ONE HUNDRED", 100.00]
];

function recurseCount($owed, $index){
    if(($owed == 0) || ($index < 0)){return;} // Stop recursion if no more money is owed, 
    // or there are no more types of money that could be given out
    let $type = MONEY[$index][0]; // alias for name of current bill/coin
    let $val = MONEY[$index][1]; // alias for value of current bill/coin
    
    if($owed == $val){ // EVEN DIV CHANGE POP SUBROUTINE
        // the ammount still owed is equal to the value of the current bill/coin
        changePile.unshift([$type, $owed]); // add the $ name and value to the change pile to be given to customer
        // ******cid[$index][1] -= $owed; // remove from till
        return;
    } else if ($owed > $val){ // CHANGE BUCKET POP SUBROUTINE:
        let remainder = $owed % $val; // change still due after grabbing some of the current bill/coin from till
        let give = $owed - remainder; // value of $ to be given from this slot (example: how much change in $1 bills if 1.00 is the current $val)
        changePile.unshift([$type, give]); // add the change to the pile to be given to the customer
        // ******cid[$index][1] -= give; // remove from till
        recurseCount(remainder, $index - 1);
        return;
    } else { // $owed < $val
        recurseCount($owed, $index - 1); // IS A RETURN VAL NEEDED HERE??
        return; // move down to the next lower valued tender and start pulling $ from that slot
    }

}
recurseCount($stillDue, 8);

changePile.forEach(val => console.log(val));


/**
 * This works great without considering the cid param...
 * 
 * Still need to be sure that it is only taking from what money is actually in the till.
 * 
 * 
 * 
 * 
 */