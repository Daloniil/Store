import {Route} from "react-router-dom";
import React from "react";
import {Drink} from "../Drink/Drink";
import {Pizza} from "../Pizza/Pizza";
import {Sneks} from "../Sneks/Sneks";
import {Sous} from "../Sous/Sous";

const Containers: React.FC = () => {
    return (
        <div>
            <Route path="/profile/pizza" render={() => <Pizza
            />}/>
            <Route path="/profile/sneks" render={() => <Sneks
            />}/>
            <Route path="/profile/drink" render={() => <Drink
            />}/>
            <Route path="/profile/sous" render={() => <Sous
            />}/>
        </div>
    )
}
export default Containers