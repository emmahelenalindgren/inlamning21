function rootReducer(state = initialState, action) {
  
  switch(action.type){
    case DEPOSIT: 
      let newstate = Object.assign({}, state);
      newstate.amount = action.amount;
      return newstate.balance += newstate.amount;
      
    case WITHDRAW:
      let newstate = Object.assign({}, state);
      newstate.amount = action.amount;
      return newstate.balance -= newstate.amount;
      
    case TRANSFER:
      let newstate = Object.assign({}, state);
      newstate.amount = action.amount;
      newstate.destinationAccount = action.destinationAccount;
      return newstate.destinationAccount += newstate.amount;
      
  }
}