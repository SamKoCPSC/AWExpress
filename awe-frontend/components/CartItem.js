import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import image from '../public/jerry.jpg';
import { Box } from '@mui/system';
import { Button, Divider, MenuItem, Select, Typography } from '@mui/material';

/*
Props:
name: <char>
image: <url>
description: <char>
price: <double>
 */
export default function CartItem(props) {
    return (
        <Box sx={{display: 'flex', gap: '16px'}}>
        <Box sx={{ display: 'flex', gap: '16px' }}>
            <Card
                sx={{
                    maxWidth: '600px',
                    height: '200px',
                    backgroundColor: '#C8C8C8',
                    borderRadius: '5px',
                    display: 'flex'
                    display: 'flex',
                }}
            >
                <CardMedia
                    sx={{ height: 200, width: 200, margin: '10px' }}
                    component='img'
                    height='200'
                    image={image}
                    title={props.name}
                />
                <CardContent>
                    <div style={{ margin: '10px' }}>
                        <Typography
                            gutterBottom
                            variant='h6'
                            component='div'
                            style={{ margin: '10px' }}
                        >
                            {props.name.slice(0, 30)}
                        </Typography>
                        <Typography
                            variant='body6'
                            color='text.secondary'
                            style={{ margin: '10px' }}
                        >
                            {props.description.slice(0, 50)}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant='h6'
                            component='div'
                            style={{ margin: '10px' }}
                        >
                            ${props.price}
                        </Typography>
                    </div>
                </CardContent>
                {/* <CardActions>

                </CardActions> */}
            </Card>
            <Typography>Qty:</Typography>
            <Select sx={{maxHeight: '32px'}}>
                {[...Array(15).keys()].map((value, index) => {
                    return (<MenuItem>{value+1}</MenuItem>)
            <Select sx={{ maxHeight: '32px' }}>
                {[...Array(15).keys()].map((value, index) => {
                    return <MenuItem key={index}>{value + 1}</MenuItem>;
                })}
            </Select>
            <Typography>$Price</Typography>
        </Box>
    );
}
}
