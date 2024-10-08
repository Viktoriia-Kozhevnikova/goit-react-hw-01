import s from '../FriendList/FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem.jsx'

const FriendList = ({friends}) => {
  return (
    <>
        <ul className={s.list}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    </>
  )
}

export default FriendList