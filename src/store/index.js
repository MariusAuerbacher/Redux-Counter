import {configureStore} from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

const counterReducer = (state = initialState, action) => {

  if(action.type === 'increment'){
    return {
      counter: state.counter + 1
    }
  }

  if(action.type === 'decrement'){
    return {
      counter: state.counter - 1
    }
  }

  return state
}

const store = configureStore({
  reducer: counterReducer
})

export default store
