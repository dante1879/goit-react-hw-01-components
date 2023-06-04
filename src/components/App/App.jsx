import Profile from "components/Profile/Profile";
import Statistics from 'components/Statistics/Statistics'
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

import friends from 'data/friends.json'
import userData from 'data/user.json'
import statistics from 'data/statistics.json'
import transactions from 'data/transactions.json'

export const App = () => {
  return (
    <div id="app-container">
      {userData.map((user) => (
        <Profile key={user.username} {...user} />
      ))}
      <Statistics title="Upload data" stats={statistics}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};