import React from 'react'
import { Routes as SwitchRoutes, Route } from 'react-router-dom'

import { FormPage, Products } from '@/pages'

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route path="/" element={<FormPage />} />
            <Route path="/products" element={<Products />} />
        </SwitchRoutes>
    )
}

export default Routes
