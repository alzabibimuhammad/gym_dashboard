import { useDispatch, useSelector } from 'react-redux'
import { getReportsData } from './store'
import { useEffect, useState } from 'react'
import ReportGrid from 'src/features/Report/componets/DataGrid'
import Lottel from 'src/@core/components/Lottie'
import { Box } from '@mui/system'

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
    {Data ? <ReportGrid rows={store.data?.data} /> : <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><Lottel /></Box>}
    </>
  )
}

export default PlayersPage
