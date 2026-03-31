import Header from 'Container/Header/Header'
import BeautyPage from 'pages/BeautyPage'
import { useLoaderData } from 'react-router-dom'
import { getBeautyPost } from 'pages/BeautyPage'
import { BeautyPost } from 'pages/BeautyPage'

export async function loader({ params }: any) {
    const post = getBeautyPost(params.postId)
    return post
}

const BeautyRoute = () => {
    const post: BeautyPost | undefined = useLoaderData() as
        | BeautyPost
        | undefined
    return (
        <>
            <Header />
            {post !== undefined ? <BeautyPage post={post} /> : <p>not found</p>}
        </>
    )
}
export default BeautyRoute
