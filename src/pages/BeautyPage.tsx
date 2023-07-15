import { Container } from '@mui/material'
import Reviews from 'components/Rewiews/Rewiews'
import beautyPostsArray from 'utils/beautyPostsArray'
import 'assets/style.scss'

export interface BeautyPost {
    id: string
    title: string
    imageUrl: string
    content: string
}

interface Props {
    post: BeautyPost
}

export function getBeautyPost(postId: string): BeautyPost | undefined {
    return beautyPostsArray.find((post) => post.id === postId)
}
const BeautyPage = ({ post }: Props) => {
    return (
        <Container>
                <h1>Beauty</h1>
                <div className="content-page">
                <h2>{post.title}</h2>
                <img src={post.imageUrl} alt="Exploring Beauty Trends"></img>
                <p>{post.content}</p>
            </div>
            <Reviews />
        </Container>
    )
}

export default BeautyPage
