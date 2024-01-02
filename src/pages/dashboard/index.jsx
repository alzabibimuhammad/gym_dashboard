import { Box, Stack } from '@mui/system'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EcommerceGeneratedLeads from 'src/features/dashboard/componets/charts/EcommerceGeneratedLeads/EcommerceGeneratedLeads'
import ActivePlayer from 'src/features/dashboard/componets/charts/activePlayer'
import MonthIncome from 'src/features/dashboard/componets/charts/monthIncome'
import CardCongratulationsJohn from 'src/features/dashboard/componets/charts/mvp'
import PlayerFinance from 'src/features/dashboard/componets/charts/playerfinance'
import Statistics from 'src/features/dashboard/componets/charts/statistcs'
import { getActivePlayer, getAnnualIncome, getFinanceMonth, getMvp, getStatistics } from './store'
import { use } from 'i18next'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const percentage = 15

  const data = null
  const store = useSelector(state => state.Dashboard)

  const [Data,setData]=useState([])
  const [Active,setActive]=useState([])

  const [statistics,setStatistics]=useState([])
  const [FinanceMonth,setFinanceMonth]=useState([])
  const [Annual,setAnnual]=useState([])

  const {t} = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMvp())
    dispatch(getActivePlayer())
    dispatch(getStatistics())
    dispatch(getFinanceMonth())
    dispatch(getAnnualIncome())

    setData(store?.Mvpdata)
    setActive(store?.ActivePlayer)
    setStatistics(store?.Statistics)
    setFinanceMonth(store.FinanceMonth)
    setAnnual(store.AnnualIncome)
  }, [dispatch,store?.Mvpdata.length,store?.ActivePlayer.length,store?.Statistics.length,store?.FinanceMonth.length,store?.AnnualIncome.length])


  return (
    <Stack spacing={6} direction={{ xs: 'column' }}   >
      {/* row 1 */}

      <Stack spacing={7} direction={{ xs: 'column', sm: 'row' }} width={{ xs:'100%' }}>
        <Box  width={{ xs:'100%',sm:'33.333333%' }} >
          {Data ? <CardCongratulationsJohn Data={Data} /> : null }
        </Box>

        <Box sx={{ flex: '1' }}>
          <Statistics Data={statistics}/>
        </Box>
      </Stack>

      {/* row 2 */}
      <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={7} >
        <Box width={{ xs:'100%',sm:'15.7%' }} >

          <MonthIncome
            stats={`${Annual?.data?.Annual_finance||0}$`}
            chipText=''
            avatarColor='info'
            chipColor='default'
            title={t('Annual Income')}
            subtitle={`${t('Year')} : ${Annual?.data?.year||0}`}
            avatarIcon='tabler:currency-dollar'
          />
        </Box>

        <Box  width={{ xs:'100%',sm:'15.7%' }}>
        <Link style={{ textDecoration:'none' }} href='/players' >
          {Active ? <ActivePlayer Data={Active} />:null}

        </Link>

        </Box>
        <Box sx={{ flex:'1' }} >
          {FinanceMonth? <PlayerFinance Data={FinanceMonth}  /> : null}
        </Box>
      </Stack>

    </Stack>
  )
}
