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
import { Button, TextField } from '@mui/material';

export default function Sell() {
    return (
      <Container>
        <Typography sx={{fontSize: '3rem'}}>Sell An Item</Typography>
        <List>
            <ListItem>
                <Typography sx={{fontSize: '2rem'}}>Product Details</Typography>
                <Typography sx={{fontSize: '2rem'}}>Product Dettails</Typography>
            </ListItem>
            <Divider></Divider>
            <ListItem>
                <Box sx={{position: 'relative', left: '48px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{fontSize: '1rem', width: '8rem'}}>Product Name:</Typography>
                        <TextField></TextField>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{fontSize: '1rem', width: '8rem'}}>Description:</Typography>
                        <TextField></TextField>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{fontSize: '1rem', width: '8rem'}}>Price:</Typography>
                        <TextField></TextField>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{fontSize: '1rem', width: '8rem'}}>Images:</Typography>
                        <Button variant='outlined'>Upload An Image</Button>
                    </Box>
                </Box>
            </ListItem>
            <ListItem>
                <Typography sx={{fontSize: '2rem'}}>Deposit Information</Typography>
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
                <Button variant='contained' sx={{}}>Post Item</Button>
            </ListItem>
        </List>
      </Container>
    )
}

Sell.getLayout = (page) => {
    return ( 
      <NavbarLayout>
        {page}
      </NavbarLayout>
    )
  }