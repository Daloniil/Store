import s from './Components/StyleApp/app.module.css'
import {Route, Switch} from 'react-router-dom';
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Information from "./Components/Information/Information";
import {Buy} from "./Components/Buy/Buy";
import {Chekout} from "./Components/Checkout/Checkout";
import {SliderItems} from "./Components/SliderItem/SliderItem";
import {AllOrder} from "./Components/Orders/AllOreder/AllOrder";
import {Header} from './Components/Header/Header';
import {Contacs} from "./Components/Contacs/Contacs";
import {ThanksForOrder} from "./Components/ThanksForOrder/ThanksForOrder";


function App() {
    return (
        <Switch>
            <div className={s.App}>
                <Header/>

                <Route exact path="/" render={() => <Profile/>}/>

                <Route path="/about" render={() => <About/>}/>

                <Route path="/information" render={() => <Information/>}/>

                <Route path="/contacs" render={() => <Contacs/>}/>

                <Route path="/finallyorder" render={() => <ThanksForOrder/>}/>

                <Route path="/profile/" render={() => <Profile/>}/>

                <Route path="/items/:id" render={() => <AllOrder/>}/>

                <Route path="/items/:id" render={() => <SliderItems/>}/>

                <Route path="/buy" render={() => <Buy/>}/>

                <Route path="/checkout" render={() => <Chekout/>}/>

                <Route path="*" render={() => <Profile/>}/>


                <Footer/>
            </div>
        </Switch>

    );
}

export default App;
