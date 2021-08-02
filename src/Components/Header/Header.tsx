import React from "react";
import {HeaderCenter} from "./HeaderCenter/HeaderCenter";
import {HeaderHeader} from "./HeaderHeader/HeaderHeader";


export const Header: React.FC = () => {
    return (
        <div>

            <HeaderHeader/>
            <HeaderCenter/>

        </div>
    )
}