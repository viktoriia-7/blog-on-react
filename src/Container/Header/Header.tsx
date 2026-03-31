import 'assets/style.scss'
import { Container } from '@mui/material'
import Menu from 'components/Menu/Menu'

type Props = {}
const Header = (props: Props) => {
    return (
        <Container>
            <div className="header-wrap">
                <Menu />
            </div>
        </Container>
    )
}
export default Header
