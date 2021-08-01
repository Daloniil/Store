import s from './Components/StyleApp/app.module.css'
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import AllOrderContainer from "./Components/Orders/AllOreder/AllOrderContainer";
import Information from "./Components/Information/Information";
import {Buy} from "./Components/Buy/Buy";
import {Chekout} from "./Components/Checkout/Checkout";
import {SliderItems} from "./Components/SliderItem/SliderItem";


function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>

                <Route exact path="/" render={() => <Redirect to={"/profile/pizza"}/>}/>

                <Route path="/about" render={() => <About/>}/>

                <Route path="/information" render={() => <Information/>}/>

                <Route path="/profile/" render={() => <Profile/>}/>

                <Route path="/items/:id" render={() => <AllOrderContainer/>}/>

                <Route path="/items/:id" render={() => <SliderItems/>}/>

                <Route path="/buy" render={() => <Buy/>}/>

                <Route path="/checkout" render={() => <Chekout/>}/>

                <Route path="*" render={() => <Redirect to={"/profile/pizza"}/>}/>


                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
