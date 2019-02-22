console.clear();

//*************
//Simulating forms submitions with
//JSON new objects
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
};

const createClaim = (name, amountToPay) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name, amountToPay
    }
  };
};

//*************
//CREATING REDUXERS
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
     return [... oldListOfClaims, action.payload];   
   }
  
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) =>{
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney -action.payload.amountToPay;
  } else if(action.type === 'CREATE_POLICY')   {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) =>{
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];   
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
};

console.log(Redux);

const { createStore, combineReducers } = Redux;

//PUTED TOGETHER ALL REDUCERS
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

//STORE: PLACE TO HOLD ALL STATES
const store = createStore(ourDepartments);

//ACTIONS CREATOR
const actionPolicy = createPolicy('Alex', 20);
//console.log(actionPolicy);
  store.dispatch(actionPolicy);
  store.dispatch(createPolicy('Jim', 30));
  store.dispatch(createPolicy('Bob', 40));
console.log(store.getState());

  store.dispatch(createClaim('John', 120));
console.log(store.getState());
  store.dispatch(createClaim('Jim', 50));
console.log(store.getState());
  store.dispatch(deletePolicy('Bob'));
console.log(store.getState());
