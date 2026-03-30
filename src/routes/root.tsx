import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from 'Container/Header/Header'
import Main from 'Container/Main/Main'

export default function Root() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />

            <Main />
        </StyledEngineProvider>
    )
}
