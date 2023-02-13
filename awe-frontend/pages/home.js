import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import NavbarLayout from '../layouts/Navbar';
import ProductCard from '../components/ProductCard';
import ExamplePage from './examplePage';
import { faker } from '@faker-js/faker';

export default function Home() {
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
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '48px',
                justifyContent: 'center',
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
    );
}

Home.getLayout = (page) => {
    return <NavbarLayout>{page}</NavbarLayout>;
};
