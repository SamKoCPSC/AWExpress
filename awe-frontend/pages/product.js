<<<<<<< HEAD
import NavbarLayout from '../layouts/Navbar'
=======
import NavbarLayout from '../layouts/Navbar';
>>>>>>> 570e3031b38aa24099c766b4977c7cc756dc6c41
import * as React from 'react';
import { Box, Container } from '@mui/system';
import { Button, Divider, MenuItem, Select, Typography } from '@mui/material';

export default function Product() {
    return (
        <Container>
<<<<<<< HEAD
            <Box sx={{display: 'flex', gap: '32px'}}>
                <Box sx={{bgcolor: 'grey', height: 270, width: 400, minWidth: 400}}></Box>
                <Box sx={{display: 'flex', gap: '16px', flexDirection: 'column', width: '100%'}}>
                    <Typography sx={{fontSize: '2rem'}}>Product Name</Typography>
                    <Typography sx={{fontSize: '1rem'}}>Seller Name</Typography>
                    <Divider></Divider>
                    <Typography sx={{minHeight: 120}}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis mauris luctus libero facilisis, et cursus dui sollicitudin.</Typography>
                    <Box sx={{display: 'flex', gap: '16px', width: '100%'}}>
                        <Typography sx={{fontSize: '2rem'}}>Price</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: '16px', width: '100%'}}>
                            <Typography sx={{fontSize: '1rem'}}>Quantity</Typography>
                            <Select>
                                {[...Array(15).keys()].map((value, index) => {
                                    return (<MenuItem>{value+1}</MenuItem>)
=======
            <Box sx={{ display: 'flex', gap: '32px' }}>
                <Box
                    sx={{
                        bgcolor: 'grey',
                        height: 270,
                        width: 400,
                        minWidth: 400,
                    }}
                ></Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '16px',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    <Typography sx={{ fontSize: '2rem' }}>
                        Product Name
                    </Typography>
                    <Typography sx={{ fontSize: '1rem' }}>
                        Seller Name
                    </Typography>
                    <Divider></Divider>
                    <Typography sx={{ minHeight: 120 }}>
                        Description: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Mauris venenatis mauris luctus libero
                        facilisis, et cursus dui sollicitudin.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '16px', width: '100%' }}>
                        <Typography sx={{ fontSize: '2rem' }}>Price</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '16px',
                                width: '100%',
                            }}
                        >
                            <Typography sx={{ fontSize: '1rem' }}>
                                Quantity
                            </Typography>
                            <Select>
                                {[...Array(15).keys()].map((value, index) => {
                                    return (
                                        <MenuItem key={index}>
                                            {value + 1}
                                        </MenuItem>
                                    );
>>>>>>> 570e3031b38aa24099c766b4977c7cc756dc6c41
                                })}
                            </Select>
                            <Button variant='contained'>Add To Cart</Button>
                        </Box>
<<<<<<< HEAD
                        
=======
>>>>>>> 570e3031b38aa24099c766b4977c7cc756dc6c41
                    </Box>
                </Box>
            </Box>
        </Container>
<<<<<<< HEAD
    )
}

Product.getLayout = (page) => {
    return ( 
      <NavbarLayout>
        {page}
      </NavbarLayout>
    )
}
=======
    );
}

Product.getLayout = (page) => {
    return <NavbarLayout>{page}</NavbarLayout>;
};
>>>>>>> 570e3031b38aa24099c766b4977c7cc756dc6c41
