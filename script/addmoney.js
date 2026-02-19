 document.getElementById("add-money-btn").addEventListener('click',function(){
    // bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    console.log(bankAccount)
    if(bankAccount=== "select a Bank"){
        alert('Please Select a bank')
        return;
    }
    // get bank account number

    const accno =getValueFromInput("add-money-number")
    if(accno.length!= 11){
        alert("Invalid acc NO")
        return;
    }

    // get ammount
    const amount = getValueFromInput("add-money-amount")
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount);
   
    const pin = getValueFromInput("add-money-pin")
    if(pin=== "1234"){
        alert(`Add Money Success from | ${bankAccount} at ${new Date()}`)
        setBalance(newBalance);
    }
    else{
        alert("Invalid pin")
        return;
    }
 })