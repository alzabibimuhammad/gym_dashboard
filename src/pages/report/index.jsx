import { useDispatch, useSelector } from 'react-redux'
import { getReportsData } from './store'
import { useEffect, useState } from 'react'
import ReportGrid from 'src/features/Report/componets/DataGrid'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

const PlayersPage = () => {
  const store = useSelector(state => state.ReportStore)
const [Data,setData]=useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReportsData())
    setData(store.data?.data)
  }, [dispatch, store.data.length])


  return(
    <>
    {Data ? <ReportGrid rows={store.data?.data} /> : <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>}
    </>
  )
}

export default PlayersPage
