import React from 'react';

import './UserCard.scss';

const UserCard = ({ user }) => {
  return (
    <article className={`user-card`}>
      <h1>Single user: {user.username}</h1>
      <ul className={`user-card__items`}>
        <li className={`user-card__item`}>
          UserId: {user.id}
        </li>
        <li className={`user-card__item`}>
          Username: {user.username}
        </li>
        <li className={`user-card__item`}>
          Name: {user.name}
        </li>
        <li className={`user-card__item`}>
          Phone: {user.phone}
        </li>
        <li className={`user-card__item`}>
          Website: {user.website}
        </li>
      </ul>
    </article>
  )
};

export default UserCard;
