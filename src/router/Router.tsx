import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomeScreen from '../screens/Home.tsx'
import Products from '../screens/Products.tsx'
import { Paths } from './constants.ts'

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomeScreen />} />

            <Route path={Paths.products} element={<Products />}>
                <Route path={Paths.product} element={<HomeScreen />} />
            </Route>

        </Routes>
    </BrowserRouter>
)

export default Router