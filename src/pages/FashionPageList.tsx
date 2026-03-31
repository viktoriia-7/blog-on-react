import { Container } from '@mui/material'
import { FashionPost } from './FashionPage'
import fashionPostsArray from 'utils/fashionPostsArray'

interface Props {
    posts: FashionPost[]
}
export function listFashionPost(): FashionPost[] {
    return fashionPostsArray
}
const FashionPageList = ({ posts }: Props) => {
    return (
        <Container>
            <h1>Fashion</h1>
            <ul>
                {posts.map((post) => (
                    <li>
                        <h2>{post.title}</h2>
                        <img
                            src={post.imageUrl}
                            alt="Exploring Fashion Trends"
                        ></img>
                        <p>{post.content.substring(0, 1000)}</p>
                        <a href={'/fashion/' + post.id}>Read more...</a>
                    </li>
                ))}
            </ul>
        </Container>
    )
}
export default FashionPageList
