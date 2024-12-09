import { Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'
import { Paths } from '../router/constants'

const Home: React.FC = () => {
    return (
        <Container>
            <Button component={Link} to={Paths.products}>Go to products</Button>
        </Container>
    )
}

export default Home