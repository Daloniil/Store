import HeaderBottom from "./HeaderBottom/HeaderBottom";
import CenterHeader from "./CenterHeader/CenterHeader";
import Containers from "./CenterHeader/Containers/Containers";
import CenterCenter from "./CenterCenter/CenterCenter";
import CenterBottom from "./CenterBottom/CenterBottom";
import FooterHeader from "./FooterHeader/FooterHeader";
import React from "react";

const Profile: React.FC = () => {
    return (
        <div>
            <HeaderBottom/>
            <CenterHeader/>
            <Containers/>
            <CenterCenter/>
            <CenterBottom/>
            <FooterHeader/>
        </div>
    )
}
export default Profile