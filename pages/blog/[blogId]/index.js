import React from 'react';
import { useRouter } from 'next/router'

const SingleBlog = () => {
    const router = useRouter()
    const Id = router.query.blogId
    return (
        <div>
            single blog {Id}
        </div>
    );
};

export default SingleBlog;