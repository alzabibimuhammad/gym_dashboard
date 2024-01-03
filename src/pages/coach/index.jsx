import { useDispatch, useSelector } from 'react-redux'
import { getCoachesData } from './store'
import { useEffect, useState } from 'react'
import CoachGrid from 'src/features/Coach/Componets/DataGrid'
import { Box, CircularProgress } from '@mui/material'
import Lottel from 'src/@core/components/Lottie'


const CoachesPage = () => {
  const store = useSelector(state => state.CoachStore)
const [Data,setData]=useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoachesData())
    setData(store.data?.data)
  }, [dispatch, store.data.length])


  return (
    <>
   {Data ? <CoachGrid rows={store.data?.data}  /> :
   <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><Lottel /></Box>
     }

    </>
  )
}

export default CoachesPage
