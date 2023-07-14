import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from 'Container/Header/Header'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Main from 'Container/Main/Main'
import Root from 'routes/root'
import BeautyRoute, { loader as BeautyLoader } from 'routes/BeautyRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    // {
    //     path: '/beauty',
    //     element: <BeautyRoute />,
    // },
    {
        path: '/beauty/:postId',
        element: <BeautyRoute  />,
        loader: BeautyLoader,

    },
])
const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />

            {/* <Header /> */}

            {/* <Main /> */}
            <RouterProvider router={router} />
        </StyledEngineProvider>
    )
}

export default App
