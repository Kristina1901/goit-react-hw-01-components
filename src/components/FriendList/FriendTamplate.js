import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
export default FriendTamplate;
function FriendTamplate({ name, isOnline, avatar }) {
  return (
    <li className={styles.item}>
      <span className={isOnline !== true ? styles.on : styles.off}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
FriendTamplate.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
