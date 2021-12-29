import React from "react";
import InformationHeader from "./InformationHeader/InformationHeader";
import InformationCenter from "./InformationCenter/InformationCenter";

const Information: React.FC = () => {
    let Scroll = require('react-scroll');
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop()

    return (
        <div >
            <InformationHeader/>
            <InformationCenter/>
        </div>
    )
}
export default Information