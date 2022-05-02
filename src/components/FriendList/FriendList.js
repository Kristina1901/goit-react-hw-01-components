import FriendTamplate from './FriendTamplate';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <FriendTamplate
            key={name}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
