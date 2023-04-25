import { legacy_createStore } from 'redux'
import actions from '../consts/actions'


 const initialstate = {coffee: 0, isLoggedIn: false, sugar: 0, }

const couterReducer = (state = initialstate, action) => { 
    switch (action.type) {
        case actions.INCREMENTCOFFEE:
             return {...state,
            coffee: state.coffee +1,
         }
         case actions.DECREMENTCOFFEE:
            return {...state,
           coffee: state.coffee  - 1,
        }
        case actions.INCREASE:
            return {...state,
           coffee: state.coffee + action.number,
        }
        case actions.LOGIN:
            return {...state,
           isLoggedIn: true,
        }
        case actions.INCREMENTSUGAR:
            return {...state,
           sugar: state.sugar +1,
        }
        case actions.DECREMENTSUGAR:
           return {...state,
          sugar: state.sugar  - 1,
       }
       case actions.INCREASES:
           return {...state,
          sugar: state.sugar + action.number,
       }
     
            

    }
    
    return state
}

const store = legacy_createStore(couterReducer); 

export default store;