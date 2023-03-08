import React from 'react';
import { useRouter } from 'next/router';

const SingleReview = () => {
    const router = useRouter()
    const reviewId = router.query.reviewId
    return (
        <div>
            {reviewId}
        </div>
    );
};

export default SingleReview;