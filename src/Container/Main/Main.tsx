import Logo from 'components/Logo/Logo'
import PostList from 'components/Post/PostList'
import { Container } from '@mui/material'
import Slider from 'components/Slider/Slider'
import SubscribeForm from 'components/Subscribe/SubscribeForm'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container>
            <Logo />
            <Slider />
            <SubscribeForm/>
            <PostList />
        </Container>
    )
}
export default Main
