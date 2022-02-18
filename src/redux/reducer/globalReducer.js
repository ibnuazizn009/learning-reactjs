import ActionType from "./globalActionType";

const globalState = {
    totalOrder: 0
  }
  
  // Reducer #2
  // fro change value from createStore
  const counterReducer = (state = globalState, action) => {
    switch (action.type) {
      case ActionType.addOrder:
        return({
          ...state,
          totalOrder: state.totalOrder + 10
        })
        
      case ActionType.minusOrder:
        let totalOrder = 0;  
        if (state.totalOrder > 0) {
          totalOrder = state.totalOrder - 10  
        }
  
        return{
          ...state,
            totalOrder: totalOrder
        }
      default:
        return state;
    }
  }

export default counterReducer;