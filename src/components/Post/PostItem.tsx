import React, { FC } from 'react';
import { IPost } from '../../models/IPost';

interface PostItemProps {
    post: IPost
    
}



const PostItem: FC<PostItemProps> = ({ post}) => {
    return (
        <div key={`post-item-${post.id}`}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostItem;