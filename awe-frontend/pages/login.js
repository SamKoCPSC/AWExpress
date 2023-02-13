import {useEffect, useState} from 'react';
import {useTheme} from '@mui/material/styles';
import {Box, Stack} from "@mui/material";
import {useSession, signIn, signOut} from 'next-auth/react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Icon} from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import {useRouter} from "next/router";


export default function Login() {
  const theme = useTheme()
  const router = useRouter();
  const {data: session, status} =  useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push("/home")
    }
  }, [status])

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.main,
      width: '100%',
      height: '100vh'
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          height: '40%',
          backgroundColor: theme.palette.secondary.main
      }}>
        <Stack direction="row">
          <Typography variant='h1' color={theme.palette.primary.light} sx={{pt: 1, mb: '2%', fontSize: 50}}>
            AW
          </Typography>
          <Typography variant='h1' color={theme.palette.background.main} sx={{mb: '2%', fontSize: 100}}>
            Express
          </Typography>
        </Stack>
      </Box>

      <Stack direction="column" spacing={2} alignItems="center" sx={{width: 'inherit', mt: '2%'}}>
        <Button size="large"
                color="inherit"
                variant="outlined"
                sx={{
                  minWidth: '20%',
                  height: '65px'}}
                onClick={() => signIn('google', {callbackUrl: '/home'})}

        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant='subtitle2'>
              Sign in with Google
            </Typography>
            <Icon icon={googleFill} color="#DF3E30" height={35}/>
          </Stack>
        </Button>
      </Stack>

      {/*{session &&*/}
      {/*  <div>*/}
      {/*  <a>You are already signed in</a>*/}
      {/*  <p>username: {session.user.name} ({session.user.email})</p>*/}
      {/*    <img src={session.user.image}/>*/}
      {/*  </div>*/}
      {/*}*/}
      {/*{!session && <a>Not signed in yet</a>}*/}





    </Box>
  )
}