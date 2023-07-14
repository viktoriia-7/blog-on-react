import Header from 'Container/Header/Header'
import BeautyPage from 'pages/BeautyPage'
import { Form, useLoaderData } from 'react-router-dom'

export async function loader({ params }: any) {
    console.log(params.postId)
    const postId = params.postId
    return { postId }
}
type Props = {
    postId: string
}

const BeautyRoute = () => {
    const postId = useLoaderData()
    return (
        <>
            {postId}
            <Header />
            <BeautyPage />
        </>
    )
}
export default BeautyRoute

// export default function BeautyRoute(props: Props) {
//     const { postId } = useLoaderData()
//     return <p>{postId}</p>
//     // existing code
// }
