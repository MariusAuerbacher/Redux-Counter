import {configureStore} from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true
}

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
})

export default store
