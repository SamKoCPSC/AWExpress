import NavbarLayout from '../layouts/Navbar';
import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { faker } from '@faker-js/faker';

export default function Listings() {
    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        let fakeArray = [];
        for (let i = 0; i < 50; i++) {
            fakeArray.push({
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                description: faker.lorem.paragraph(),
            });
        }
        setFakeData(fakeArray);
    }, []);

    return (
        <Box>
            <Typography
                sx={{ fontSize: '3rem', position: 'relative', left: '32px' }}
            >
                Your Listings
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '48px',
                    justifyContent: 'center',
                    margin: '32px',
                }}
            >
                {fakeData.map((item, key) => (
                    <ProductCard
                        key={key}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </Box>
        </Box>
    );
}

Listings.getLayout = (page) => {
    return <NavbarLayout>{page}</NavbarLayout>;
};
