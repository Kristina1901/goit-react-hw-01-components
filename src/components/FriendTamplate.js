export default FriendTamplate
function FriendTamplate({ name, isOnline, avatar }) {
  if (isOnline === true) {
    return <li className="item">
      <span className="status true">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  }
  else {
    return <li className="item">
      <span className="status false">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
        
  }    
}