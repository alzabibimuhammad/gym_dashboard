// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { showErrorToast } from 'src/utiltis/toastUtils'

export const getSubscriptionsData = createAsyncThunk('SubscriptionsStore/getSubscriptionsData', async () => {
  try{
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/subscription', {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`
      }
    })
    
    return {
      data: response.data
      
    }
  }
  catch(error){
    showErrorToast(error)
  }
  })

export const SubscriptionsUpdate = createAsyncThunk('SubscriptionsStore/SubscriptionsUpdate', async (id) => {
  try{
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + `/api/updateSubscription/${id}`,{subscriptionFee:"200000"}, {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`
      }
    })
    
    return {
      data: response.data
      
    }
  }
  catch(error){
    showErrorToast(response)
  }
  })




const appSubscriptionsSlice = createSlice({
  name: 'SubscriptionsStore',
  initialState: {
    data: [],
    loading: false,
    update:[]
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSubscriptionsData.pending, state => {
        state.loading = true
      })
      .addCase(getSubscriptionsData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data
      })
    

     
    
  }
}

)

export default appSubscriptionsSlice.reducer
