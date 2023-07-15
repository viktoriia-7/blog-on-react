import Logo from 'components/Logo/Logo'
import { Container } from '@mui/material'
import Slider from 'components/Slider/Slider'
import SubscribeForm from 'components/Subscribe/SubscribeForm'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container>
            <Logo />
            <Slider />
            <SubscribeForm />
        </Container>
    )
}
export default Main
