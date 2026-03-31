import Logo from 'components/Logo/Logo'
import { Container } from '@mui/material'
import Slider from 'components/Slider/Slider'
import SubscribeForm from 'components/Subscribe/SubscribeForm'
import Reviews from 'components/Rewiews/Rewiews'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container>
            <Logo />
            <Slider />
            <SubscribeForm />
            <Reviews/>
        </Container>
    )
}
export default Main
