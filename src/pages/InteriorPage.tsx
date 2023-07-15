import { Container } from '@mui/material'
import Reviews from 'components/Rewiews/Rewiews'
import interiorPostsArray from 'utils/interiorPostsArray'

export interface InteriorPost {
    id: string
    title: string
    imageUrl: string
    content: string
}

interface Props {
    post: InteriorPost
}

export function getInteriorPost(postId: string): InteriorPost | undefined {
    return interiorPostsArray.find((post) => post.id === postId)
}
const InteriorPage = ({ post }: Props) => {
    return (
        <Container>
            <h1>Interior</h1>
            <h2>{post.title}</h2>
            <img src={post.imageUrl} alt="Exploring Interior Trends"></img>
            <p>{post.content}</p>
            <Reviews/>
        </Container>
    )
}
export default InteriorPage
