import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomeScreen from '../screens/Home.tsx'
import Products from '../screens/Products.tsx'
import { Paths } from './constants.ts'
import Header from '../components/Header/Header.tsx'

const Router: React.FC = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<HomeScreen />} />

            <Route path={Paths.products} element={<Products />} />
            <Route path={Paths.product} element={<HomeScreen />} />

        </Routes>
    </BrowserRouter>
)

export default Router