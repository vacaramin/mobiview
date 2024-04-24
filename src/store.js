import { configureStore } from '@reduxjs/toolkit'
import darkmodeReducer from 'GlobalStates/darkmode'

export default configureStore({
  reducer: {
    darkmode: darkmodeReducer
  },
  
})