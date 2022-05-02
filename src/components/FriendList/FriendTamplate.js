import styles from './FriendList.module.css'
export default FriendTamplate
function FriendTamplate({ name, isOnline, avatar }) {
     return <li className={styles.item}>
      <span className={isOnline !== true? styles.on: styles.off}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48"/>
      <p className={styles.name}>{name}</p>
    </li>
  
}