import s from "./StyleInformation/Information.module.css";

import React from "react";
import InformationHeader from "./InformationHeader/InformationHeader";
import InformationCenter from "./InformationCenter/InformationCenter";

const Information: React.FC = () => {
    let Scroll = require('react-scroll');
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop()

    return (
        <div className={s.about}>
            <InformationHeader/>
            <InformationCenter/>
        </div>
    )
}
export default Information