let initialState = {
  accountNo: 1001,
  balance: null,
  destinationAccount: null
}

const DEPOSIT = "DEPOSIT",
      WITHDRAW = "WITHDRAW",
      TRANSFER = "TRANSFER";

function actionDeposit(amount){
  return{
    type: DEPOSIT,
    amount 
  }
}

function actionWithdraw(amount){
  return {
    type: WITHDRAW,
    amount
  }
}

function actionTransfer(amount, destinationAccount){
  return {
    type: TRANSFER,
    amount,
    destinationAccount
  }
}