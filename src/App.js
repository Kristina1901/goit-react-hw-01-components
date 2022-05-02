import './App.css';
import Profile from './components/Profile/Profile'
import user from './Data/user.json'
import data from './Data/data.json'
import StatisticsList from './components/Statistic/StatisticsList'
import friends from './Data/friends.json'
import FriendList from './components/FriendList/FriendList'
import transactions from './Data/transition.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
function App() {
  return <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <StatisticsList title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
   
  </div>
}

export default App;
