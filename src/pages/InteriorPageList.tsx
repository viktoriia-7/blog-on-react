import { Container } from '@mui/material'
import { InteriorPost } from './InteriorPage'
import interiorPostsArray from 'utils/interiorPostsArray'

interface Props {
    posts: InteriorPost[]
}
export function listInteriorPost(): InteriorPost[] {
    return interiorPostsArray
}
const InteriorPageList = ({ posts }: Props) => {
    return (
        <Container>
            <h1>Interior</h1>
            <ul>
                {posts.map((post) => (
                    <li>
                        <h2>{post.title}</h2>
                        <img
                            src={post.imageUrl}
                            alt="Exploring Interior Trends"
                        ></img>
                        <p>{post.content.substring(0, 1000)}</p>
                        <a href={'/interior/' + post.id}>Read more...</a>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default InteriorPageList
