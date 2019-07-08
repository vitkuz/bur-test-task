import React from 'react';

export const SingleUserView = ({ username, name, phone, website, address, company }) => {
  return (
    <div className={`user`}>
      <ul className={`user__items`}>
        <li className={`user__item`}>
          Username: {username}
        </li>
        <li className={`user__item`}>
          Name: {name}
        </li>
        <li className={`user__item`}>
          Phone: {phone}
        </li>
        <li className={`user__item`}>
          Website: {website}
        </li>
      </ul>
    </div>
  )
};

export default SingleUserView;
