function checkCashRegister(price, cash, cid) {
  let cashArr = cid.map(e => e[1]*100),
      converted = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000],
      rawChange = ((cash - price)*100),
      cashRegister = [["PENNY", 0],  ["NICKEL", 0],  ["DIME", 0],  ["QUARTER", 0],  ["ONE", 0],  ["FIVE", 0],  ["TEN", 0],  ["TWENTY", 0],  ["ONE HUNDRED", 0]],
      change = {status: "", change: []};
  for (let x = cashArr.length - 1; x >= 0; x--) {
    while(cashArr[x] > 0) {
      if (rawChange - converted[x] >= 0) {
        cashRegister[x][1] += converted[x];
        rawChange -= converted[x];
        cashArr[x] -= converted[x];       
      } else { break; }
    }
    if (rawChange === 0) {break;}
  }
  for (let i = cashRegister.length -1;i >= 0; i--){
    if (cashRegister[i][1] !== 0){
      cashRegister[i][1] = cashRegister[i][1]/100
    }
  }
  if (rawChange !== 0) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }
  else if (rawChange === 0 && JSON.stringify(cashRegister)==JSON.stringify(cid)) {    
    change.status = "CLOSED";
    change.change = cashRegister;
    return change;        
  }
  else {  
    cashRegister = cashRegister.filter(e => e[1] !== 0).reverse();  
    change.status = "OPEN";
    change.change = cashRegister;
    return change;
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
