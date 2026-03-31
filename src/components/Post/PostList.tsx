import PostListItem from './PostListItem'

type Props = {
    posts: Array<{
        id: number
        title: string
        content: string
        imageUrl?: string
    }>
}

const PostList = ({ posts }: Props) => {
    return (
        <div>
            {posts.map((post) => (
                <PostListItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList;
