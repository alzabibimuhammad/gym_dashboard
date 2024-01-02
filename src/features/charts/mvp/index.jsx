// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Rating } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Illustration = styled('img')(({ theme }) => ({
  right: 20,
  bottom: 0,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    right: 5,
    width: 110
  }
}))

const CardCongratulationsJohn = (Data) => {

  let {data} = Data.Data



  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 0.5 }}>
          Congratulations {data?.name} ! 🎉
        </Typography>
        <Typography sx={{ mb: 2, color: 'text.secondary' }}>Best coach of the month</Typography>

        <Typography variant='h4' sx={{ mb: 0.5, color: 'primary.main' }}>

{data?.rate ?  <Rating name="read-only" value={data?.rate } readOnly /> : null

}


        </Typography>

        <Link href={`coach/coachProfile/${data?.id}`} >
        <Button variant='contained'>View Profile</Button>
        </Link>

          <Illustration sx={{ width:'90px',height:'90px',borderRadius:'50%',marginBottom:'40px' }} width={116} alt='congratulations john' src={process.env.NEXT_PUBLIC_IMAGES+'/' + data?.image[0].image} />

      </CardContent>
    </Card>
  )
}

export default CardCongratulationsJohn
