// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import { useTranslation } from 'react-i18next'
//   {
//     "success": true,
//     "message": "success",
//     "data": {
//         "players": 2,
//         "coaches": 3,
//         "subscriptionFee": 2000000,
//         "numOfReports": 7
//     }
// }

const Statistics = (Data) => {
  const { t } = useTranslation()


const data = [
  {
    stats: `${Data?.Data.data?.players || 0 }`,
    title: t("Players"),
    color: 'primary',
    icon: 'tabler:users'
  },
  {
    color: 'info',
    stats: `${Data?.Data.data?.coaches || 0 }`,
    title: t("Coaches"),
    icon: 'tabler:chart-pie-2'
  },
  {
    color: 'error',
    stats: `${Data?.Data.data?.numOfReports || 0 }`,
    title: t("Reports"),
    icon: 'tabler:report'
  },
  {
    stats: `${Data?.Data.data?.subscriptionFee || 0 }`,
    color: 'success',
    title: t("Price"),
    icon: 'tabler:currency-dollar'
  }
]

const renderStats = () => {
  return data.map((sale, index) => (
    <Grid item xs={6} md={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 42, height: 42 }}>
          <Icon icon={sale.icon} fontSize='1.5rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{sale.stats}</Typography>
          <Typography variant='body2'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

  return (
    <Card>
      <CardHeader
        title={t("Statistics")}
        sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }}
        action={
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>

          </Typography>
        }
      />
      <CardContent
        sx={{ pt: theme => `${theme.spacing(7)} !important`, pb: theme => `${theme.spacing(7.5)} !important` }}
      >
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Statistics
