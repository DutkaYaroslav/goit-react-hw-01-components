import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ friendsJSON }) {
  return (
    <>
      {friendsJSON.map(friend => (
        <li key={friend.id} className={styles.listStyle}>
          <span
            className={friend.isOnline ? styles.circleGreen : styles.circleRed}
          >
            {friend.isOnline}
          </span>
          <img className={styles.name} src={friend.avatar} alt="" width="48" />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  friendsJSON: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;
