import NavbarLayout from '../layouts/Navbar'
import CartItem from '../components/CartItem';
import { Box, Container } from '@mui/system';
import { Button, Divider, Typography } from '@mui/material';

export default function Cart() {
    return (
        <></>
    )
}

Cart.getLayout = (page) => {
    return ( 
      <NavbarLayout>
        {page}
      </NavbarLayout>
    )
}