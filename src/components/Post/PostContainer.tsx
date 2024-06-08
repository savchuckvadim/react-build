import React, { useEffect, useState } from 'react';
import { postAPI } from '../../services/PostService';
import PostItem from './PostItem';




const PostContainer = ({ }) => {

    const [limit, setLimit] = useState(Math.random() * 100)
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000 // pooling like websocket
    });

    useEffect(() => {

        setTimeout(() => {
            setLimit(Math.random() * 20)
        }, 2000);
    }, [limit])

    const [currentPosts, setCurrentPosts] = useState(posts)

    useEffect(() => {
        setCurrentPosts(posts)
    }, [posts])
    return (
        <div>
            <div className="post__list">
                <button
                    onClick={() => refetch()}
                >
                    REFETCH
                </button>
                {isLoading && <h1>Идет загрузка</h1>}
                {error && <h1>Произошла ошибка</h1>}
                {currentPosts && currentPosts.map(post => <PostItem post={post} />)}
            </div>
        </div>
    );
}

export default PostContainer;