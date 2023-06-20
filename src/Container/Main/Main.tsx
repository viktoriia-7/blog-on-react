import Logo from 'components/Logo/Logo'
import PostList from 'components/Post/PostList'
import { Container } from '@mui/material'
import Slider from 'components/Slider/Slider'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container>
            <Logo />
            <Slider />
            <PostList />
        </Container>
    )
}
export default Main
