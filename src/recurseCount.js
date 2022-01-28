let changePile = [];
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

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

function recurseCount(owed_$, index_$){
    if ((owed_$ == 0) || (index_$ < 0)){return;} // Stop recursion if no more money isowed$, 
    // or there are no more types of money that could be given out

    let slotVal = cid[index_$][1]; // alias for total value of the money in the current bill/coin slot

    if (!slotVal){ // no $ in current slot
        recurseCount(owed_$, index_$ - 1); // move onto next-biggest money slot
    }

    let type_$ = MONEY[index_$][0]; // alias for name of current bill/coin
    let unitVal = MONEY[index_$][1]; // alias for unit value of current bill/coin
      
    if (owed_$ == unitVal){ // EVEN DIV CHANGE POP SUBROUTINE
        // the ammount stillowed$ is equal to the unit value of the current bill/coin
        changePile.unshift([type_$, owed_$]); // add the $ name and value to the change pile to be given to customer
        cid[index_$][1] -= owed_$; // remove from till
        return;
    } else if (owed_$ > unitVal){ // CHANGE BUCKET POP SUBROUTINE:
        

        let remainder = owed_$ % unitVal; // change still due after grabbing some of the current bill/coin from till
        let give_$ = owed_$ - remainder; // value of $ to be given from this slot (example: how much change in $1 bills if 1.00 is the current unitVal)
        
        changePile.unshift([type_$, give_$]); // add the change to the pile to be given to the customer
        cid[index_$][1] -= give_$; // remove from till
        
        



        recurseCount(remainder, index_$ - 1);
        return;
    } else { // owed_$ < unitVal
        recurseCount(owed_$, index_$ - 1);
        return; // move down to the next lower valued tender and start pulling $ from that slot
    
    
    
    
    
    }

}
recurseCount($stillDue, 8);

changePile.forEach(val => console.log(val));


/**
 * This works great without considering the cid param...
 * It also *assumes* that cid will provide ["$TYPE", 0.0] for any empty slots in the till,
 * and <cid> will be sorted in ascending order of unit value.
 * Still need to be sure that it is only taking from what money is actually in the till.
 * 
 * <slotVal> should NEVER become negative; 
 * it should only be >= 0 and evenly divisible by 0.01
 * 
 * 
 */