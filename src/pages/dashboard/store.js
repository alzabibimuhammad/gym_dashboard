
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const getMvp = createAsyncThunk('Dashboard/getMvp', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/mvpCoach', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  return {
    data: response.data
  }
})


export const getActivePlayer = createAsyncThunk('Dashboard/getActivePlayer', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/countActivePlayers', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  return {
    data: response.data
  }
})

export const getStatistics = createAsyncThunk('Dashboard/getStatistics', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/statistics', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

export const getFinanceMonth = createAsyncThunk('Dashboard/getFinanceMonth', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/financeMonth', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

export const getAnnualIncome = createAsyncThunk('Dashboard/getAnnualIncome', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/showAnnual', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState: {
    Mvpdata: [],
    ActivePlayer: [],
    Statistics: [],
    FinanceMonth: [],
    AnnualIncome: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMvp.pending, state => {
        state.loading = true
      })
      .addCase(getMvp.fulfilled, (state, action) => {
        state.loading = false
        state.Mvpdata = action.payload.data
      })
      .addCase(getActivePlayer.fulfilled, (state, action) => {
        state.loading = false
        state.ActivePlayer = action.payload.data
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.loading = false
        state.Statistics = action.payload.data
      })
      .addCase(getFinanceMonth.fulfilled, (state, action) => {
        state.loading = false
        state.FinanceMonth = action.payload.data
      })
      .addCase(getAnnualIncome.fulfilled, (state, action) => {
        state.loading = false
        state.AnnualIncome = action.payload.data
      })

  }
})

export default DashboardSlice.reducer
