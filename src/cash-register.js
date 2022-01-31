/**
 * A cash-till function for processing transactions with cash. It calculates how much money 
 * (and what type) will be given to the customer if change is due. This program assumes that 
 * <cid> param will provide ["$TYPE", 0.0] for any empty slots in the till, and slots will be
 * sorted in ascending order by its unit value.
 * @param {number} price : cost of goods to customer
 * @param {number} cash : cash given by customer to pay for goods
 * @param {2-D array} cid : "cash-in-drawer"; specified ammounts for each type of bill/coin
 * @returns {object} tillState : the state of the drawer; 
 *      i.e. whether it is open for more business, and the ammount/type of money
 *      given as change. NOTE: The change given will only include units where the total value for the unit
 *      given to the customer is > 0. For example, ["$TYPE", 0.0] will not appear in the return value.
 */
function checkCashRegister(price, cash, cid) {
    if ( (price % 0.001 > 0) || (cash % 0.001 > 0) ) { // Edge case: input of money values < 1 cent
        price -= (price % 0.001); // Only mutates param value if it's not in correct format,
        cash -= (cash % 0.001); // otherwise this function uses the param values as-is
    }

    let $stillDue = cash - price; // Init. variable: amount of money the customer is still owed
    let changePile = []; // itemized breakdown of change to be given to the customer
    // ========= STANDARD DATA NEEDED ====
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
    ]; // The MONEY array represents the value of one of a given bill or coin

//// Till COUNTING SUBROUTINE:
    function tillCount(arr2D){
        let counter = 0;
        for (let i=0; i < arr2D.length; i++){
            counter += arr2D[i][1];
        };
        counter = Math.round(100 * counter) / 100; // this extra step helps maintain accuracy of floats in Javascript
        return counter;
    }
    let totalTill = tillCount(cid); // represents the total money value in the till

    //==== MAIN BODY OF ALGORITHM ============
    if (totalTill < $stillDue){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalTill === $stillDue){ // customer is owed the exact ammount of change in the till
        // give customer the change and close out the till
        return {status: "CLOSED", change: cid};
    } else { // when totalTill > $stillDue
////////////////////////////////////////////////////////////////////////////////////
        function recurseCount(owed_$, index_$){
            if ((owed_$ == 0) || (index_$ < 0)){return;} // Stop recursion if no more money is owed, 
            // or there are no more types/units of money that could be given out for the remainder

            let slotVal = cid[index_$][1]; // alias for total value of the money in the current bill/coin slot
            let unitVal = MONEY[index_$][1]; // alias for unit value of current bill/coin

            if ((!slotVal) || (owed_$ < unitVal)){ // no $ in current slot, or the current denomination/unit size is too big to give out
                recurseCount(owed_$, index_$ - 1); // move on to next-biggest money slot
                return;
            }

            let type_$ = MONEY[index_$][0]; // alias for name of current bill/coin
      
            if (owed_$ == unitVal){ // 1 EXACT UNIT-POP SUBROUTINE
                // the ammount stillowed$ is equal to the unit value of the current bill/coin
                changePile.unshift([type_$, owed_$]); // add the $ name and value to the change pile to be given to customer
                cid[index_$][1] -= owed_$; // remove from till
                return;
            } else if (owed_$ > unitVal){ // ITERATIVE UNIT-POP SUBROUTINE:
        

                let remainder = owed_$ % unitVal; // change still due that cannot be fulfilled from the current slot
                let maxFromSlot = owed_$ - remainder; // max possible value of $ to be given from this slot (example: how much change in $1 bills if 1.00 is the current unitVal)
        
                let unitCount = 0;
                while ((unitCount < (slotVal / unitVal)) && (unitCount < (maxFromSlot / unitVal))){
                    // *****count how many  instances of the current bill you can give out
                    unitCount += 1;
                }
        
                let giveFromSlot = unitCount * unitVal;

                changePile.unshift([type_$, giveFromSlot]); // add the change to the pile to be given to the customer
                cid[index_$][1] -= giveFromSlot; // remove from till 
                remainder += maxFromSlot - giveFromSlot; // if there wasn't enough in the slot to give out the maximum possible,
                // then add the difference to the remainder and recurse on the remainder

                recurseCount(remainder, index_$ - 1);
                return;
            }
        console.log(...changePile);
        console.log("^ End of Recursion")
        return;
        }
        recurseCount($stillDue, 8);
///////////////////////////////////////
    }
    if ($stillDue > 0){
        // at this point, exact change cannot be given:
        // any bills or coins remaining in the till will be bigger than the amount due to the customer
        console.log({status: "INSUFFICIENT_FUNDS", change: []});
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    // at this point, the exact amount of change is given to the customer and the till is ready for the next transaction
    console.log({status: "OPEN", change: changePile})
    return {status: "OPEN", change: changePile};
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
