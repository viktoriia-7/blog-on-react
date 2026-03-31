import { Container } from '@mui/material'
import logo from 'assets/logo.png'
import 'assets/style.scss'

type Props = {}

const Logo = (props: Props) => {
    return (
        <>
            <Container>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </Container>
        </>
    )
}
export default Logo
