import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Card from '../components/Card/Card'
import { testData } from '../api/testData'

const Products: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={5} columns={12}>
                {testData.map(({ image, title, description, liked }) => (
                    <Grid key={image} size={{ lg: 4, md: 6, xs: 12 }} display="flex" justifyContent="center">
                        <Card image={image} title={title} description={description} liked={liked} />
                    </Grid>
                ))}
            </Grid>

        </Container>
    )
}

export default Products