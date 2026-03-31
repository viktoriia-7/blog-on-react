import Header from 'Container/Header/Header'
import FashionPage from 'pages/FashionPage'
import { useLoaderData } from 'react-router-dom'
import { getFashionPost } from 'pages/FashionPage'
import { FashionPost } from 'pages/FashionPage'

export async function loader({ params }: any) {
    const post = getFashionPost(params.postId)
    return post
}

const FashionRoute = () => {
    const post: FashionPost | undefined = useLoaderData() as
        | FashionPost
        | undefined
    return (
        <>
            <Header />
            {post !== undefined ? (
                <FashionPage post={post} />
            ) : (
                <p>not found</p>
            )}
        </>
    )
}
export default FashionRoute
