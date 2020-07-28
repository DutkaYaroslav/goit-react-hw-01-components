import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

console.log(styles);

function Profile({ name, avatar, location, stats, tag }) {
  return (
    <div className={styles.container}>
      <div className={styles.direction}>
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className={styles.color}>{tag}</p>
        <p className={styles.color}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.li}>
          <span className="label">Follovers</span>
          <span className={styles.span}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={styles.span}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={styles.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
