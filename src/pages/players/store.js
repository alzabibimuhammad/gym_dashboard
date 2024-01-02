// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { showSuccesToast } from 'src/utiltis/toastSecces'
import { showErrorToast } from 'src/utiltis/toastUtils'

export const getPlayersData = createAsyncThunk('PlayerStore/getPlayersData', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/showPlayer', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

export const RemovePlayer = createAsyncThunk('PlayerStore/RemovePlayer', async id => {
 try {
  const response=await axios.delete(process.env.NEXT_PUBLIC_BASE_URL + `/api/delete/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  showSuccesToast(response.data.message)
   
  return response.data
 }
 catch(error)
 {
  showErrorToast(error.response?.data?.message);
  return rejectWithValue(error.response?.data);

 }
  
})

export const PlayerDetails = createAsyncThunk('PlayerStore/PlayerInfo', async id => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/playerInfo/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  return{
   data:response.data
  }
})

const appPlayerSlice = createSlice({
  name: 'PlayerStore',
  initialState: {
    data: [],
    playerInfo:[],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPlayersData.pending, state => {
        state.loading = true
      })
      .addCase(getPlayersData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data
      })
      .addCase(RemovePlayer.fulfilled, state => {
        state.status = 'succeeded'
      })
      .addCase(PlayerDetails.fulfilled,(state,action)=>{
        state.loading = false
        state.playerInfo = action.payload.data
      })
  }
})

export default appPlayerSlice.reducer
