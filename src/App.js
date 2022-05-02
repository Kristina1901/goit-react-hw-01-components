import './App.css';
import Profile from './components/Profile'
import user from './user.json'
import data from './data.json'
import Statistics from './components/Statistics'
import friends from './friends.json'
import FriendList from './components/FriendList';
import transactions from './transition.json';
import TransactionHistory from './components/TransactionHistory';
function App() {
  return <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
   
  </div>
}

export default App;
