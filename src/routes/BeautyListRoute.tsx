import Header from 'Container/Header/Header'
import BeautyPage from 'pages/BeautyPage'
import { useLoaderData } from 'react-router-dom'
import BeautyPageList, { listBeautyPost } from 'pages/BeautyPageList'
import { BeautyPost } from 'pages/BeautyPage'

export async function loader({ params }: any) {
    const posts = listBeautyPost()
    return posts
}

type Props = {}
const BeautyListRoute = (props: Props) => {
    const posts: BeautyPost[] = useLoaderData() as BeautyPost[]
    return (
        <>
            <Header />
            <BeautyPageList posts={posts} />
        </>
    )
}
export default BeautyListRoute
