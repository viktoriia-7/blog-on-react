import Header from 'Container/Header/Header'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Main from 'Container/Main/Main'


type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
        </StyledEngineProvider>
    )
}
export default App
