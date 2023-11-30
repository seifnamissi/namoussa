import React from 'react';

const Review = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.user.username}: {comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;