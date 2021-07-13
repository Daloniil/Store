import {Route} from "react-router-dom";
import PizzaContainer from "../Pizza/PizzaContainer";
import SneksContainer from "../Sneks/SneksContainer";
import DrinkContainer from "../Drink/DrinkContainer";
import SousContainer from "../Sous/SousContainer";

const Containers = () => {
    return (
        <div>
            <Route path="/profile/pizza" render={() => <PizzaContainer
            />}/>
            <Route path="/profile/sneks" render={() => <SneksContainer
            />}/>
            <Route path="/profile/drink" render={() => <DrinkContainer
            />}/>
            <Route path="/profile/sous" render={() => <SousContainer
            />}/>
        </div>
    )
}
export default Containers