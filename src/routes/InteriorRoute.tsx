import Header from 'Container/Header/Header'
import InteriorPage from 'pages/InteriorPage'
import { useLoaderData } from 'react-router-dom'
import { getInteriorPost } from 'pages/InteriorPage'
import { InteriorPost } from 'pages/InteriorPage'

export async function loader({ params }: any) {
    const post = getInteriorPost(params.postId)
    return post
}

const InteriorRoute = () => {
    const post: InteriorPost | undefined = useLoaderData() as
        | InteriorPost
        | undefined
    return (
        <>
            <Header />
            {post !== undefined ? (
                <InteriorPage post={post} />
            ) : (
                <p>not found</p>
            )}
        </>
    )
}
export default InteriorRoute
