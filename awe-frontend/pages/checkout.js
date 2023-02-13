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

export default function Checkout() {
    return (
        <Container>
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between '}}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                <Typography sx={{fontSize: '3rem'}}>Checkout</Typography>
                <List>
                    <ListItem>
                        <Typography sx={{fontSize: '2rem'}}>Contact</Typography>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                        <Box sx={{position: 'relative', left: '48px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <TextField label="Phone Number" size='small'></TextField>
                            <TextField label="Email" size='small'></TextField>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Typography sx={{fontSize: '2rem'}}>Shipping Address</Typography>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                        <Box sx={{position: 'relative', left: '48px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <TextField label="Country" size='small'></TextField>
                            <TextField label="Province/State" size='small'></TextField>
                            <TextField label="City" size='small'></TextField>
                            <TextField label="Street Address" size='small'></TextField>
                            <TextField label="Postal Code" size='small'></TextField>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Typography sx={{fontSize: '2rem'}}>Billing Address</Typography>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                        <Box sx={{position: 'relative', left: '48px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <TextField label="Country" size='small'></TextField>
                            <TextField label="Province/State" size='small'></TextField>
                            <TextField label="City" size='small'></TextField>
                            <TextField label="Street Address" size='small'></TextField>
                            <TextField label="Postal Code" size='small'></TextField>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Typography sx={{fontSize: '2rem'}}>Payment</Typography>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                        <Box sx={{position: 'relative', left: '48px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <TextField label="Card Number" size='small'></TextField>
                            <TextField label="Name On Card" size='small'></TextField>
                            <TextField label="Expiry Date" size='small'></TextField>
                            <TextField label="Security Code" size='small'></TextField>
                        </Box>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{position: 'fixed', top: '10%', left: '70%', display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <Box sx={{display: 'flex'}}>
                <Typography sx={{fontSize: '1rem', width: '6rem'}}>Subtotal:</Typography>
                <Typography sx={{fontSize: '1rem'}}>$Price</Typography>
              </Box>
              <Box sx={{display: 'flex'}}>
                <Typography sx={{fontSize: '1rem', width: '6rem'}}>Taxes:</Typography>
                <Typography sx={{fontSize: '1rem'}}>$Price</Typography>
              </Box>
              <Box sx={{display: 'flex'}}>
                <Typography sx={{fontSize: '1rem', width: '6rem'}}>Shipping:</Typography>
                <Typography sx={{fontSize: '1rem'}}>$Price</Typography>
              </Box>
              <Divider></Divider>
              <Box sx={{display: 'flex'}}>
                <Typography sx={{fontSize: '1rem', width: '6rem'}}>Total:</Typography>
                <Typography sx={{fontSize: '1rem'}}>$Price</Typography>
              </Box>
              <Button variant='contained' href='/payconfirm'>Pay Now</Button>
            </Box>
          </Box>
        </Container>
    )
}

Checkout.getLayout = (page) => {
    return ( 
      <NavbarLayout>
        {page}
      </NavbarLayout>
    )
}
import NavbarLayout from '../layouts/Navbar';
import * as React from 'react';
import { Box, Container } from '@mui/system';
import { Button, Divider, Typography } from '@mui/material';
import CartItem from '../components/CartItem';

export default function Checkout() {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between ',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                    }}
                >
                    <CartItem
                        name='Product Name'
                        description='Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        price='Price'
                    ></CartItem>
                    <CartItem
                        name='Product Name'
                        description='Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        price='Price'
                    ></CartItem>
                    <CartItem
                        name='Product Name'
                        description='Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        price='Price'
                    ></CartItem>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: '1rem', width: '6rem' }}>
                            Subtotal:
                        </Typography>
                        <Typography sx={{ fontSize: '1rem' }}>
                            $Price
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: '1rem', width: '6rem' }}>
                            Taxes:
                        </Typography>
                        <Typography sx={{ fontSize: '1rem' }}>
                            $Price
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: '1rem', width: '6rem' }}>
                            Shipping:
                        </Typography>
                        <Typography sx={{ fontSize: '1rem' }}>
                            $Price
                        </Typography>
                    </Box>
                    <Divider></Divider>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: '1rem', width: '6rem' }}>
                            Total:
                        </Typography>
                        <Typography sx={{ fontSize: '1rem' }}>
                            $Price
                        </Typography>
                    </Box>
                    <Button variant='contained' href='/checkout'>
                        Checkout
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

Checkout.getLayout = (page) => {
    return <NavbarLayout>{page}</NavbarLayout>;
};
