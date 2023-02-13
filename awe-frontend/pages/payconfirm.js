import NavbarLayout from '../layouts/Navbar'
import * as React from 'react';
import { Box, Container } from '@mui/system';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Button, Typography } from '@mui/material';

export default function PayConfirm() {
    return (
        <Container>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '32px', gap: '16px'}}>
                <CheckOutlinedIcon sx={{fontSize: '200px'}}></CheckOutlinedIcon>
                <Typography sx={{fontSize: '2rem'}}>Your order was successfully placed!</Typography>
                <Button variant='contained' href='/home'>Back to Home</Button>
                <Button variant='outlined' href='/orders'>View Your Orders</Button>
            </Box>
        </Container>
    )
}

PayConfirm.getLayout = (page) => {
    return ( 
      <NavbarLayout>
        {page}
      </NavbarLayout>
    )
}