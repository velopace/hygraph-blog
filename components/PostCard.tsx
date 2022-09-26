import * as React from 'react'

import { Post } from '../types';

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