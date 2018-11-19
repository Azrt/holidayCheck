import React from 'react';

export const Comment = ({
    comment,
    user,
}) => (
    <div className="review__comment">
        <p className="review__comment-heading">Comment:</p>
        <p>{comment}</p>
        <div className="review__comment-author-container">
            <figure className="review__comment-author-figure">
                <img src={user.picture.thumbnail} />
            </figure>
            <p className="review__comment-author">{user.name.first} {user.name.last}</p>
        </div>
    </div>
);