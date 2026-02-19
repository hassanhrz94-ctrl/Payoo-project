document.getElementById('cashout-btn').addEventListener("click", function(){
   const cashoutNumber =  getValueFromInput("cashout-number")
   if(cashoutNumber.length !=11){
    alert("Invalid Number")
   }

  //  get the amount
  const cashoutAmount =getValueFromInput("cashout-amount");

  const currentBalance = getBalance()

  // calculate balance
 const newBalance =currentBalance- Number(cashoutAmount)
 console.log(newBalance)
 if(newBalance<0){
  alert("Invalid Amount")
  return;
 }
 const pin =getValueFromInput("cashout-pin")
 if(pin==="1234"){
  alert("cashout successfull")
setBalance(newBalance)
}
else{
  alert("Invalid Pin")
}


})






// document.getElementById('cashout-btn').addEventListener('click',function(){
//     // // get the agent number & validate
//  const cashoutNumberInput =   document.getElementById('cashout-number')
//  const cashoutNumber = cashoutNumberInput.value;
//  console.log(cashoutNumber)
//   if(cashoutNumber.length !=11){
//     alert('Invalid Agent Number')
//     return;
//  }
// // get the amount
//  const cashoutAmountInput = document.getElementById('cashout-amount')
//  const cashoutAmount = cashoutAmountInput.value;
//  console.log(cashoutAmount);

// // get the current balance

//  const balanceElement = document.getElementById('balance')
//  const balance = balanceElement.innerText
//  console.log(balance);

// //  calculate the new balance
//  const newBalance = Number(balance) - Number(cashoutAmount);
 
//  if(newBalance< 0 ){
//     alert('invalid amount');
//     return
//  }
// // get the pin and verify

//  const cashoutPinInput = document.getElementById('cashout-pin')
//  const pin = cashoutPinInput.value;
//   if(pin==='1234'){
//     alert("cashout successfull")
//      console.log("new balance",newBalance);
//      balanceElement.innerText = newBalance;
//   }
//   else{
//     alert('Invalid Pin')
//     return;
//   }

// })