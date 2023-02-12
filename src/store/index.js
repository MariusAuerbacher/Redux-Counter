import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer}
}) 



export default store

/*
const counterReducer = (state = initialState, action) => {

  if(action.type === 'increment'){
    return {
      ...initialState,
      counter: state.counter + 1,
      showCounter: state.showCounter
    
    }
  }
  if(action.type === 'increase'){
    return{
      ...initialState,
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }
  if(action.type === 'decrement'){
    return {
      ...initialState,
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }
  if(action.type === 'toggle'){
    return{
      ...initialState,
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }

  return state
}

const store = configureStore({
  reducer: counterReducer
})*/


