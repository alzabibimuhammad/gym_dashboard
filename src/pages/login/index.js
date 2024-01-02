// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import { useAuth } from 'src/hooks/useAuth'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} `
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  phoneNumber: yup.string().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: '222222',
  phoneNumber: '1234567890'
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const { settings } = useSettings()

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    try {
      const userData = await auth.login(data, rememberMe)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url('/images/background.png')  `,
        backgroundSize: 'cover',
        backgroundPosition: 'no-repeat',
      }}
    >
      <Box sx={{ justifyContent: 'flex-end', display: 'flex', p: [2, 10] }}>
        <Box
          sx={{
            borderRadius: '2.5rem',

            height: '34.3125rem',
            width: '24.6875rem',
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
            backgroundColor:'rgba(200,200,200,0.7)'

          }}
        >
          <Box
            sx={{
              marginTop: '5px',
              p: [6, 12],
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <svg width={34} viewBox='0 0 32 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  fill={theme.palette.primary.main}
                  d='M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z'
                />
                <path
                  fill='#161616'
                  opacity={0.06}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z'
                />
                <path
                  fill='#161616'
                  opacity={0.06}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  fill={theme.palette.primary.main}
                  d='M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z'
                />
              </svg>
              <Box sx={{ my: 6 }}>
                <Typography variant='h3' sx={{ mb: 1.5 }}>
                  {`Welcome to ${themeConfig.templateName}! 👋🏻`}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Please sign-in to your account and start the adventure
                </Typography>
              </Box>

              <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ mb: 4 }}>
                  <Controller
                    name='phoneNumber'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        fullWidth
                        autoFocus
                        label='Phone Number'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholder='1234567890'
                        error={Boolean(errors.email)}
                        {...(errors.email && { helperText: errors.email.message })}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ mb: 1.5 }}>
                  <Controller
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        fullWidth
                        value={value}
                        onBlur={onBlur}
                        label='Password'
                        onChange={onChange}
                        id='auth-login-v2-password'
                        error={Boolean(errors.password)}
                        {...(errors.password && { helperText: errors.password.message })}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                edge='end'
                                onMouseDown={e => e.preventDefault()}
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 1.75,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <FormControlLabel
                    label='Remember Me'
                    control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                  />
                  <Typography component={LinkStyled} href='/forgot-password'>
                    Forgot Password?
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'end', flexWrap: 'wrap', justifyContent: 'end' }}>
                  <Button type='submit' variant='contained' sx={{ mb: 4 }}>
                    Login
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
                  <Typography href='/register' component={LinkStyled}>
                    Create an account
                  </Typography>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
