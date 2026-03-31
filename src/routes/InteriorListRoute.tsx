import Header from 'Container/Header/Header'
import InteriorPage from 'pages/InteriorPage'
import { useLoaderData } from 'react-router-dom'
import { InteriorPost } from 'pages/InteriorPage'
import InteriorPageList, { listInteriorPost } from 'pages/InteriorPageList'

export async function loader({ params }: any) {
    const posts = listInteriorPost()
    return posts
}

type Props = {}
const InteriorListRoute = (props: Props) => {
    const posts: InteriorPost[] = useLoaderData() as InteriorPost[]
    return (
        <>
            <Header />
            <InteriorPageList posts={posts} />
        </>
    )
}
export default InteriorListRoute
