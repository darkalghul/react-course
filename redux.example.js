console.clear();

// ACTIONS CREATORS AND ACTIONS
const createPolicy = (name, amount) => {
   return {
      type: "CREATE_POLICY",
      payload: {
         name: name,
         amount: amount
      }
   };
};

const deletePolicy = name => {
   return {
      type: "DELETE_POLICY",
      payload: {
         name: name
      }
   };
};

const createClaim = (name, amountOfMoneyToCollect) => {
   return {
      type: "CREATE_CLAIM",
      payload: {
         name: name,
         amountOfMoneyToCollect: amountOfMoneyToCollect
      }
   };
};

// REDUCERS
const claimsHistory = (oldListOfClaims = [], action) => {
   if (action.type === "CREATE_CLAIM") {
      return [...oldListOfClaims, action.payload];
   }

   return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
   if (action.type === "CREATE_CLAIM") {
      return bagOfMoney - action.payload.amountOfMoneyToCollect;
   } else if (action.type === "CREATE_POLICY") {
      return bagOfMoney + action.payload.amount;
   }

   return bagOfMoney;
};

const policiesHistory = (listOfPolicies = [], action) => {
   if (action.type === "CREATE_POLICY") {
      return [...listOfPolicies, action.payload.name];
   } else if (action.type == "DELETE_POLICY") {
      return listOfPolicies.filter(name => name !== action.payload.name);
   }

   return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
   accounting: accounting,
   claimsHistory: claimsHistory,
   policiesHistory: policiesHistory
});

const store = createStore(ourDepartments);
store.dispatch(createPolicy("Hector", 50));
store.dispatch(createPolicy("Sharon", 150));
store.dispatch(createPolicy("Magda", 20));

store.dispatch(createClaim("Sharon", 130));
store.dispatch(createClaim("Hector", 10));

store.dispatch(deletePolicy("Magda"));

console.log(store.getState());
