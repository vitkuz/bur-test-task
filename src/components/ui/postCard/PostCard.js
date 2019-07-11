import React from 'react';

import './PostCard.scss';

const PostCard = ({ userId, id, title, body }) => {
  return (
    <article className={`post-card`}>
      <h3 className={`post-card__title`}>{title}</h3>
      <p className={`post-card__body`}>{body}</p>
    </article>
  )
};

export default PostCard;
