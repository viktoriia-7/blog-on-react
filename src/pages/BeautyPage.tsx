import { Container } from '@mui/material'
import Reviews from 'components/Rewiews/Rewiews'
import beautyPostsArray from 'utils/beautyPostsArray'
import 'assets/style.scss'
import Like from 'components/Like/Like'

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
            <div className="post-page">
                <h2 className="post-title">{post.title}</h2>
                <img
                    className="post-image"
                    src={post.imageUrl}
                    alt="Exploring Beauty Trends"
                ></img>
                <p className="post-content">{post.content}</p>
                <Like id={post.id} />
            </div>
            <Reviews />
        </Container>
    )
}

export default BeautyPage
