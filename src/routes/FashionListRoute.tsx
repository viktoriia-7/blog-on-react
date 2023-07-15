import Header from 'Container/Header/Header'
import FashionPage from 'pages/FashionPage'
import { useLoaderData } from 'react-router-dom'
import FashionPageList, { listFashionPost} from 'pages/FashionPageList'
import { FashionPost } from 'pages/FashionPage'

export async function loader({ params }: any) {
    const posts = listFashionPost()
    return posts
}

type Props = {}
const FashionListRoute = (props: Props) => {
    const posts: FashionPost[] = useLoaderData() as FashionPost[]
    return (
        <>
            <Header />
            <FashionPageList posts={posts} />
        </>
    )
}
export default FashionListRoute
