import React from "react";
import "./UserProfile.css";
interface UserProfileProps {}
const UserProfile: React.FC<UserProfileProps> = (props) => {
  return (
    <main className="profile">
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
