function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let tenderList = [];
    let tillState = { status: "Open", change: tenderList}
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


    function tillCount(arr2D){
        let counter = 0;
        for (let i=0; i < arr2D.length; i++){
            counter += arr2D[i][1];
        };
        counter = Math.round(100 * counter) / 100;
        return counter;
    }
    let totalTill = tillCount(cid);

    //====BODY OF ALGORITHM============
    if (totalTill < changeDue){
        return {status: "INSUFFICIENT_FUNDS", change: []}; // JUST RETURN <tillState>
    } else if (totalTill === changeDue){
        return {status: "CLOSED", change: cid}; // JUST RETURN <tillState>
    } else {
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