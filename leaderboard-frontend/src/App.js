import React, { useState } from "react";
import UserSelection from "./components/UserSelection";
import Leaderboard from "./components/Leaderboard";
import ClaimPoints from "./components/ClaimPoints";

const App = () => {
  const [selectedUser, setSelectedUser] = useState("");

  

  return (
    <div>
      <UserSelection onUserSelect={setSelectedUser} />
      <ClaimPoints selectedUser={selectedUser} />
      <Leaderboard />
    </div>
  );
};

export default App;
