import s from './Components/StyleApp/app.module.css'
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import AllOrderContainer from "./Components/Orders/AllOreder/AllOrderContainer";
import SliderItemContainer from "./Components/SliderItem/SliderItemContainers";
import BuyContainer from "./Components/Buy/BuyContainer";
import Checkout from "./Components/Checkout/Checkout";


function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>

                <Route exact path="/" render={() => <Redirect to={"/profile/pizza"}/>}/>

                <Route path="/about" render={() => <About/>}/>

                <Route path="/profile/" render={() => <Profile/>}/>

                <Route path="/items/:id" render={() => <AllOrderContainer/>}/>

                <Route path="/items/:id" render={() => <SliderItemContainer/>}/>

                <Route path="/buy" render={() => <BuyContainer/>}/>

                <Route path="/checkout" render={() => <Checkout/>}/>

                <Route path="*" render={() => <Redirect to={"/profile/pizza"}/>}/>


                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
