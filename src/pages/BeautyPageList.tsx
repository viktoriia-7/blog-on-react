import { Container } from '@mui/material'
import { BeautyPost } from './BeautyPage'
import beautyPostsArray from 'utils/beautyPostsArray'

interface Props {
    posts: BeautyPost[]
}
export function listBeautyPost(): BeautyPost[] {
    return beautyPostsArray
}
const BeautyPageList = ({ posts }: Props) => {
    return (
        <Container>
            <h1>Beauty</h1>
            <ul>
                {posts.map((post) => (
                    <li>
                        <h2>{post.title}</h2>
                        <img
                            src={post.imageUrl}
                            alt="Exploring Beauty Trends"
                        ></img>
                        <p>{post.content.substring(0, 1000)}</p>
                        <a href={'#/beauty/' + post.id}>Read more...</a>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default BeautyPageList
