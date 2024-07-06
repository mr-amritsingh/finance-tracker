import { createSlice } from '@reduxjs/toolkit'

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
      allTransaction: []
    },
    reducers: {
      addAllTransaction: (state, action) => {
        state.allTransaction = [...action.payload]
      },
      addSingleTransaction: (state, action) => {
        state.allTransaction = [...state.allTransaction, action.payload]
      },
    },
  })
  
  export const { addAllTransaction, addSingleTransaction } = transactionSlice.actions
  
  export default transactionSlice.reducer