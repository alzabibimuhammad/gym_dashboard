// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { useEffect, useState } from 'react'

const ActivePlayer = (Data) => {
  const {data} = Data?.Data
  const theme = useTheme()
  const [total,setTotal] = useState();


  useEffect(()=>{
    setTotal(data?.active_players ? (data?.active_players / data?.total_players) * 100 : 0)
  },[data])
  const options = {
    chart: {
      sparkline: { enabled: true }
    },
    stroke: { lineCap: 'round' },
    colors: [hexToRGBA(theme.palette.warning.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      radialBar: {
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '64%' },
        track: {
          strokeWidth: '40%',
          background: hexToRGBA(theme.palette.customColors.trackBg, 1)
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -3,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.h4.fontSize
          }
        }
      }
    },
    grid: {
      padding: {
        bottom: 15
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { height: 199 }
        }
      },
      {
        breakpoint: 430,
        options: {
          chart: { height: 150 }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' sx={{ color: '#65B741' }}>
          Active Players:  {data?.active_players}
        </Typography>

       {total ? <ReactApexcharts type='radialBar' height={149} series={[Number(total).toFixed(1)]} options={options} />:null

       }

        <br/>
        <Typography variant='body2' sx={{ textAlign: 'center', color: 'text.disabled' }}>
          The total playes in gym {data?.total_players}
        </Typography>

      </CardContent>
    </Card>
  )
}

export default ActivePlayer
