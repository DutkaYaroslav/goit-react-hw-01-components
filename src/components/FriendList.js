import React from 'react';
// import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ children }) {
  return <ul className={styles.container}>{children}</ul>;
}

// FriendList.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.exact()),
// };

export default FriendList;
