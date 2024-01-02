// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { showSuccesToast } from 'src/utiltis/toastSecces'
import { showErrorToast } from 'src/utiltis/toastUtils'

export const getCoachesData = createAsyncThunk('CoachStore/getCoachesData', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/showCoach', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

////////////////////////////////////////////////REMOVE Coach/////////////////////////
export const RemoveCoach = createAsyncThunk('CoachStore/RemoveCoach', async id => {
  try {
    const response = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL + `/api/delete/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.accessToken}`
      }
    })
    showSuccesToast(response.data.message)

    return response.data
  } catch (error) {
    showErrorToast(error.response?.data?.message)

    return rejectWithValue(error.response?.data)
  }
})

//////////////////////////////////////////////////////////////

export const addCoach = createAsyncThunk('coaches/addCoach', async coachData => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + `/api/register`, coachData, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.accessToken}`
      }
    })
    showSuccesToast(response.data.message)

    return response.data
  } catch (error) {
    showErrorToast(error.response?.data?.message)

    return rejectWithValue(error.response?.data)
  }
})

////////////////////////////////////////////////////edit//////////////////////////////////////////////
export const EditCoach = createAsyncThunk('coaches/editCoach', async coachData => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/updateUser/${coachData.Data.id}`,
      coachData.data,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.accessToken}`
        }
      }
    )
    showSuccesToast(response.data.message)
    
    return response.data
  } catch (error) {
    showErrorToast(error.response?.data?.message)

    return rejectWithValue(error.response?.data)
  }
})

export const CoachInfo = createAsyncThunk('CoachStore/CoachInfo', async id => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/showCoachInfo/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

const appCoachSlice = createSlice({
  name: 'CoachStore',
  initialState: {
    data: [],
    coachInfo: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCoachesData.pending, state => {
        state.loading = true
      })
      .addCase(getCoachesData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data
      })
      .addCase(RemoveCoach.fulfilled, state => {
        state.status = 'succeeded'
      })
      .addCase(CoachInfo.fulfilled, (state, action) => {
        state.loading = false
        state.coachInfo = action.payload.data
      })
  }
})

export default appCoachSlice.reducer
