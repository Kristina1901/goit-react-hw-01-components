import FriendTamplate from './FriendTamplate';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'
function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
        {friends.map(({avatar, name, isOnline}) => {
            return <FriendTamplate key={name} name={name} isOnline={isOnline} avatar={avatar}/>
        })}
      </ul>
  )
}

export default FriendList
FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}