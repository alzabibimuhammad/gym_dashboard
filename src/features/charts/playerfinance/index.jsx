// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import TabContext from '@mui/lab/TabContext'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// ** Custom Components Import
import Icon from 'src/@core/components/icon'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'



const PlayerFinance = (Data) => {
  // ** State
  // console.log("finannnnnnnnnnn",Data?.Data?.data[0].monthName)
  const [data , setData] = useState()
  useEffect(()=>{
    setData(Data)
  },[])

  const tabData = [
    {
      type: 'orders',
      avatarIcon: 'tabler:shopping-cart',
      series: [{ data: [28, 10, 45, 38, 15,50] }]
    },
  ]

  const renderTabPanels = (value, theme, options, colors, data) => {
    console.log('rendersdkjfdp',data?.Data?.data?.[0])
    return tabData.map((item, index) => {
      const max = Math.max(...item.series[0].data)
      const seriesIndex = item.series[0].data.indexOf(max)
      const finalColors = colors.map((color, i) => (seriesIndex === i ? hexToRGBA(theme.palette.primary.main, 1) : color))

      return (
        <TabPanel key={index} value={item.type}>
          {Data ?<ReactApexcharts type='bar' height={263} options={{ ...options, colors: finalColors }} series={item.series} />:null}
        </TabPanel>
      )
    })
  }

  const [value, setValue] = useState('orders')

  // ** Hook
  const theme = useTheme()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const colors = Array(9).fill(hexToRGBA(theme.palette.primary.main, 0.16))

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: '35%',
        startingShape: 'rounded',
        dataLabels: { position: 'top' }
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: {
      offsetY: -15,
      formatter: val => `${val}k`,
      style: {
        fontWeight: 500,
        colors: [theme.palette.text.secondary],
        fontSize: theme.typography.body1.fontSize
      }
    },
    colors,
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: 20,
        left: -5,
        right: -8,
        bottom: -12
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { color: theme.palette.divider },
      categories: [ `${data?.Data?.data?.[4]?.monthName||''}`,`${data?.Data?.data?.[3]?.monthName}`, `${data?.Data?.data?.[2]?.monthName}`, `${data?.Data?.data?.[1]?.monthName}`, `${data?.Data?.data?.[0]?.monthName}`],
      labels: {
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -15,
        formatter: val => `$${val}k`,
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '60%' }
          },
          grid: {
            padding: { right: 20 }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Earning Reports'
        subheader='Yearly Earnings Overview'

      />
      <CardContent sx={{ '& .MuiTabPanel-root': { p: 0 } }}>
        <TabContext value={value}>
          <TabList
            variant='scrollable'
            scrollButtons='auto'
            onChange={handleChange}
            aria-label='earning report tabs'
            sx={{
              border: '0 !important',
              '& .MuiTabs-indicator': { display: 'none' },
              '& .MuiTab-root': { p: 0, minWidth: 0, borderRadius: '10px', '&:not(:last-child)': { mr: 4 } }
            }}
          >
          </TabList>
          {renderTabPanels(value, theme, options, colors,data)}
        </TabContext>
      </CardContent>
    </Card>
  )
}

export default PlayerFinance
