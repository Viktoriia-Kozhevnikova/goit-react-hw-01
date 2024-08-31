// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import userData from '/src/userData.json'
import friends from '/src/friends.json'
import transactions from '/src/transactions.json'
import Profile from '/src/components/Profile/Profile.jsx'
import FriendList from '/src/components/FriendList/FriendList.jsx'
import TransactionHistory from '/src/components/TransactionHistory/TransactionHistory.jsx'
import '/src/components/App.css'


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
