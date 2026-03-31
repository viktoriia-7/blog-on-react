import './Header.scss'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Container } from '@mui/material'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar
            position="static"
            style={{ backgroundColor: 'white', color: 'black' }}
        >
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    ></Typography>
                    <IconButton
                        size="large"
                        aria-label="search"
                        color="inherit"
                    >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
