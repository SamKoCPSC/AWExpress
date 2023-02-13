import NavbarLayout from '../layouts/Navbar'
import * as React from 'react';
import { Box, Container } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function Profile() {
    return (
        <Container>
            <Typography sx={{fontSize: '3rem'}}>Your Account</Typography>
            <List>
                <ListItem>
                    <Typography sx={{fontSize: '2rem'}}>Credentials</Typography>
                </ListItem>
                <Divider></Divider>
                <ListItem>
                    <Box sx={{position: 'relative', left: '48px', display: 'flex', gap: '16px'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <Typography sx={{fontSize: '1rem'}}>Name:</Typography>
                            <Typography sx={{fontSize: '1rem'}}>Email:</Typography> 
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <Typography sx={{fontSize: '1rem'}}>Firstname Lastname</Typography>
                            <Typography sx={{fontSize: '1rem'}}>email@email.com</Typography>
                        </Box>
                        
                    </Box>
                </ListItem>
                <ListItem>
                    <Button variant='contained' sx={{left: '48px'}}>Change</Button>
                </ListItem>
                <ListItem>
                    <Typography sx={{fontSize: '2rem'}}>Deposit</Typography>
                </ListItem>
                <Divider></Divider>
                <ListItem>
                    <Box sx={{position: 'relative', left: '48px', display: 'flex', gap: '16px'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <Typography sx={{fontSize: '1rem'}}>Account Number:</Typography>
                            <Typography sx={{fontSize: '1rem'}}>Institution Number:</Typography>
                            <Typography sx={{fontSize: '1rem'}}>Transit Number:</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <Typography sx={{fontSize: '1rem'}}>**** **** **** ****</Typography>
                            <Typography sx={{fontSize: '1rem'}}>***</Typography>
                            <Typography sx={{fontSize: '1rem'}}>*****</Typography>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <Button variant='contained' sx={{left: '48px'}}>Change</Button>
                </ListItem>
            </List>
        </Container>
    )
}

Profile.getLayout = (page) => {
    return ( 
      <NavbarLayout>
        {page}
      </NavbarLayout>
    )
  }