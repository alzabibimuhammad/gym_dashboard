import { useDispatch, useSelector } from 'react-redux'
import { getPlayersData } from './store'
import { useEffect, useState } from 'react'
import PlayerGrid from 'src/features/Player/Componets/DataGrid'
import Lottel from 'src/@core/components/Lottie'
import { Box } from '@mui/system'


const PlayersPage = () => {
  const store = useSelector(state => state.PlayerStore)
const [Data,setData]=useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlayersData())
    setData(store.data?.data)

  }, [dispatch, store.data.length])


  return (
    <>
    {Data ? <PlayerGrid rows={store.data?.data} /> : <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><Lottel /></Box>}

    </>
  )
}

export default PlayersPage
