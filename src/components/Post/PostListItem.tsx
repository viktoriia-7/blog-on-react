type Props = {
    post: {
        id: number
        title: string
        content: string
        imageUrl?: string
    }
}

const PostListItem = ({ post }: Props) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
        </div>
    )
}

export default PostListItem
