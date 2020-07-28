import React from 'react';
import Profile from './Profile';
import Statistics from './Statisctics';
import FriendList from './FriendList';
import FriendListItem from './FriendListItem.js';
import Transaction from './TransactionHistory';

import user from '../user.json';
import statisticData from '../statistical-data.json';
import friends from '../friends.json';
import transactionData from '../transaction.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={statisticData} />
      <FriendList>
        <FriendListItem friendsJSON={friends}></FriendListItem>
      </FriendList>
      <Transaction items={transactionData} />
    </>
  );
}

export default App;
