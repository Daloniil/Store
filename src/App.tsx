import s from "./Components/StyleApp/app.module.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import About from "./Components/Drawer/About/About";

import { Buy } from "./Components/BuyMenu/Buy/Buy";
import { Chekout } from "./Components/BuyMenu/Checkout/Checkout";
import { SliderItems } from "./Components/SliderItem/SliderItem";
import { AllOrder } from "./Components/Orders/AllOreder/AllOrder";
import { Header } from "./Components/Header/Header";

import { ThanksForOrder } from "./Components/ThanksForOrder/ThanksForOrder";
import Information from "./Components/Drawer/Information/Information";
import { Contacts } from "./Components/Drawer/Contacts/Contacts";
import Profile from "./Components/Drawer/Menu/Profile";

function App() {
  return (
    <Switch>
      <div className={s.App}>
        <Header />

        <Route
          exact
          path="/"
          render={() => <Redirect to={"/profile/pizza"} />}
        />

        <Route path="/about" render={() => <About />} />

        <Route path="/information" render={() => <Information />} />

        <Route path="/contacs" render={() => <Contacts />} />

        <Route path="/finallyorder" render={() => <ThanksForOrder />} />

        <Route path="/profile/" render={() => <Profile />} />

        <Route path="/items/:id" render={() => <AllOrder />} />

        <Route path="/items/:id" render={() => <SliderItems />} />

        <Route path="/buy" render={() => <Buy />} />

        <Route path="/checkout" render={() => <Chekout />} />

        <Route path="*" render={() => <Redirect to={"/profile/pizza"} />} />

        <Footer />
      </div>
    </Switch>
  );
}

export default App;
