import HeaderBottom from "./HeaderBottom/HeaderBottom";
import CenterHeader from "./CenterHeader/CenterHeader";
import Containers from "./CenterHeader/Containers/Containers";

import React from "react";

const Profile: React.FC = () => {
  return (
    <div style={{ margin: "0 0 -20px 0" }}>
      <HeaderBottom />
      <CenterHeader />
      <Containers />
    </div>
  );
};
export default Profile;
