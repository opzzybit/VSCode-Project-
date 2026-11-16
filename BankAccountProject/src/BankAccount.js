const bankDetails = {
    balance: 0,
    transactionPin: 0,
};

function setTransactionPin(number){
    bankDetails.transactionPin += number;
}

function transactionPinNotSetErrorMessage(){
    throw new Error('Transaction pin not set yet');
}

function changeTransactionPin(number){
    bankDetails.transactionPin = number;
}

function setDeposit(amount){
   
  if (amount < 0){
    throw new Error('Negative number is not accepted');
  }
  else{
    bankDetails.balance += amount; 
  }
}

function setWithdraw(amount){
   
   if (amount < 0){
    throw new Error('Negative number is not accepted');
    }
   else{
    bankDetails.balance -= amount;
    }
}

function resetAccount(botton){
    if (botton == 'reset'){
      bankDetails.balance = 0;
      bankDetails.transactionPin = 0;
    }
    else{
      throw new Error('Enter "reset" to complete the process');
    }
}



function getBalance(){
    return bankDetails.balance;
}

function getTransactionPin(){
    return bankDetails.transactionPin;
}



module.exports = {
  getBalance, 
  setDeposit, 
  setWithdraw, 
  getTransactionPin,
  setTransactionPin,
  transactionPinNotSetErrorMessage,
  changeTransactionPin,
  resetAccount
};