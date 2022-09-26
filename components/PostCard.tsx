import * as React from 'react'

interface Post {
    title: string;
    excerpt: string;
}

type Props = {
    post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
    return (
        <div>
            {post.title}
            {post.excerpt}
        </div>
    );
}

export default PostCard;