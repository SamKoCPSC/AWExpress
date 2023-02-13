import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../public/jerry.jpg';
import { Grow, Theme } from '@mui/material';
import { bgcolor } from '@mui/system';
import Link from 'next/link';

/*
Props:
name: <char>
image: <url>
description: <char>
price: <double>
 */


export default function ProductCard(props) {
    return (
        <Grow in={true}>
            <Link href='/product'>
                <Card
                    sx={{
                        href: '/product',
                        width: '350px',
                        height: '400px',
                        backgroundColor: '#C8C8C8',
                        borderRadius: '5px',
                        "&:hover": {
                            backgroundColor: '#757575',
                        }
                    }}
                >
                    <CardMedia
                        sx={{ height: 200, margin: '10px' }}
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
            </Link>
        </Grow>
    );
}
