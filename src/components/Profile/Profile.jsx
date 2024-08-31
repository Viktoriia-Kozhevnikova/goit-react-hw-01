import s from '../Profile/Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
  <>
    <div className={s.container}>
      <div className={s.user}>
        <img className={s.image}
          src={image}
          alt="User avatar"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
    
      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.number}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span className={s.number}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span className={s.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
  )
}






// const Profile = ({ name, tag, location, image, stats }) => {
//     return (
//     <>
//       <div>
//   <div>
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//     />
//     <p>Petra Marica</p>
//     <p>@pmarica</p>
//     <p>Salvador, Brasil</p>
//   </div>

//   <ul>
//     <li>
//       <span>Followers</span>
//       <span>1000</span>
//     </li>
//     <li>
//       <span>Views</span>
//       <span>2000</span>
//     </li>
//     <li>
//       <span>Likes</span>
//       <span>3000</span>
//     </li>
//   </ul>
// </div>
//     </>
//   )
// }






export default Profile