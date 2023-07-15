import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from 'Container/Header/Header'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Main from 'Container/Main/Main'
import Root from 'routes/root'

import BeautyRoute, { loader as BeautyLoader } from 'routes/BeautyRoute'
import BeautyListRoute, {
    loader as BeautyLoaderList,
} from 'routes/BeautyListRoute'
import FashionListRoute, {
    loader as FashionLoaderList,
} from 'routes/FashionListRoute'
import FashionRoute, { loader as FashionLoader } from 'routes/FashionRoute'
import InteriorListRoute, {
    loader as InteriorLoaderList,
} from 'routes/InteriorListRoute'
import InteriorRoute, { loader as InteriorLoader } from 'routes/InteriorRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/beauty',
        element: <BeautyListRoute />,
        loader: BeautyLoaderList,
    },
    {
        path: '/beauty/:postId',
        element: <BeautyRoute />,
        loader: BeautyLoader,
    },
    {
        path: '/fashion',
        element: <FashionListRoute />,
        loader: FashionLoaderList,
    },
    {
        path: '/fashion/:postId',
        element: <FashionRoute />,
        loader: FashionLoader,
    },
    {
        path: '/interior',
        element: <InteriorListRoute />,
        loader: InteriorLoaderList,
    },
    {
        path: '/interior/:postId',
        element: <InteriorRoute />,
        loader: InteriorLoader,
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
