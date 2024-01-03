import React from 'react'
import SubscriptionsGrid from 'src/features/subscriptions/components/DataGrid';

import { SubscriptionsUpdate, getSubscriptionsData } from './store';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Subscriptions = () => {
  const store = useSelector(state => state.SubscriptionsStore)
const [Data,setData]=useState([])
const [Update,setUpdate]=useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSubscriptionsData())
    dispatch(SubscriptionsUpdate())



    setData(store.data?.data)
    setUpdate(store.update?.update)


  }, [store.data.length])



  return (
  <>


 {Data ? <SubscriptionsGrid   rows={store.data?.data} />:

  <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} >
    <CircularProgress />
  </Box>
  }

    </>
  )
}

export default Subscriptions;



