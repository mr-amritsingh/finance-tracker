import { configureStore } from '@reduxjs/toolkit'
import transactionSlice from './components/transactionSlice'

export default configureStore({
  reducer: {
    transactions : transactionSlice
  },
})