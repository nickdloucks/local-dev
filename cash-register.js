/**
 * A cash-till/POS function for processing transactions with cash
 * @param {number} price : cost of goods to customer
 * @param {number} cash : cash given by customer to pay for goods
 * @param {2-D array} cid : "cash-in-drawer", specified ammounts for each type of bill/coin
 * @returns {object} tillState : the state of the drawer; 
 *      i.e. whether it is open for more business, and the ammount of $ still remaining
 */
function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let tenderList = [];
    let tillState = { status: "OPEN", change: tenderList} // state variable to return, set w/ default values
    // ========= DATA STORE ====
    const MONEY = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }

////MAYBE REFACTOR THE CID COUNTING SUBROUTINE
    function tillCount(arr2D){
        let counter = 0;
        for (let i=0; i < arr2D.length; i++){
            counter += arr2D[i][1];
        };
        counter = Math.round(100 * counter) / 100; // helps maintain accuracy of floats in Javascript
        return counter;
    }
    let totalTill = tillCount(cid);

    //====BODY OF ALGORITHM============
    if (totalTill < changeDue){
        return {status: "INSUFFICIENT_FUNDS", change: []}; // JUST RETURN <tillState>
    } else if (totalTill === changeDue){
        return {status: "CLOSED", change: cid}; // JUST RETURN <tillState>
    } else {
////////////////////////////////////////////////////////////////////////////////////
//KEEP ALL CODE ABOVE, SWITCH TO RECURSION/DIV&CONQ BELOW:
        /* divide problem:
            recursively calc bills change,
            recursively calc coins change
            if balance still remains, build up remeaining changeDue with coins
                ex: if $1 is still owed but no more bills available, give 4 quarters


        */
        cid = cid.reverse();
        for (let tender of cid){
            let currentTender = [tender[0], 0];
            while ((changeDue >= MONEY[tender[0]]) && (tender[1] > 0)){
                currentTender[1] += MONEY[tender[0]];
                tender[1] -= MONEY[tender[0]];
                changeDue -= MONEY[tender[0]];
                changeDue = Math.round(100 * changeDue) / 100;
            }
            if(currentTender[1] > 0){
                tenderList.push(currentTender);
            }
        }
        console.log(...tenderList)
    }

    if (changeDue > 0){
        console.log({status: "INSUFFICIENT_FUNDS", change: []})
        return {status: "INSUFFICIENT_FUNDS", change: []}; // JUST RETURN <tillState>
    }
    console.log({status: "OPEN", change: tenderList})
    return {status: "OPEN", change: tenderList}; // JUST RETURN <tillState>
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);