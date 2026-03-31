import { Container } from '@mui/material'
import Reviews from 'components/Rewiews/Rewiews'
import fashionPostsArray from 'utils/fashionPostsArray'

export interface FashionPost {
    id: string
    title: string
    imageUrl: string
    content: string
}

interface Props {
    post: FashionPost
}

export function getFashionPost(postId: string): FashionPost | undefined {
    return fashionPostsArray.find((post) => post.id === postId)
}
const FashionPage = ({ post }: Props) => {
    return (
        <Container>
            <h1>Fashion</h1>
            <h2>{post.title}</h2>
            <img src={post.imageUrl} alt="Exploring Fashion Trends"></img>
            <p>{post.content}</p>
            <Reviews />
        </Container>
    )
}
export default FashionPage
