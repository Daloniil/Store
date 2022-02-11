import HeaderBottom from "./HeaderBottom/HeaderBottom";
import CenterHeader from "./CenterHeader/CenterHeader";
import Containers from "./CenterHeader/Containers/Containers";
import CenterCenter from "./CenterCenter/CenterCenter";
import React from "react";

const Profile: React.FC = () => {
  return (
    <div>
      <HeaderBottom />
      <CenterHeader />
      <Containers />
      <CenterCenter />
    </div>
  );
};
export default Profile;
