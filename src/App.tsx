import s from "./StyleApp/app.module.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";

import { Buy } from "./Pages/Buy/Buy";
import { Chekout } from "./Pages/Checkout/Checkout";
import { SliderItems } from "./Components/SliderItem/SliderItem";
import { AllOrder } from "./Pages/AllOreder/AllOrder";
import { Header } from "./Components/Header/Header";

import { ThanksForOrder } from "./Pages/ThanksForOrder/ThanksForOrder";
import Information from "./Pages/Information/Information";
import { Contacts } from "./Pages/Contacts/Contacts";
import Menu from "./Pages/Menu/Menu";

function App() {
  return (
    <Switch>
      <div className={s.App}>
        <Header />

        <Route
          exact
          path="/"
          render={() => <Redirect to={"/profile/sweets"} />}
        />

        <Route path="/about" render={() => <About />} />

        <Route path="/information" render={() => <Information />} />

        <Route path="/contacs" render={() => <Contacts />} />

        <Route path="/finallyorder" render={() => <ThanksForOrder />} />

        <Route path="/profile/" render={() => <Menu />} />

        <Route path="/items/:id" render={() => <AllOrder />} />

        <Route path="/items/:id" render={() => <SliderItems />} />

        <Route path="/buy" render={() => <Buy />} />

        <Route path="/checkout" render={() => <Chekout />} />

        <Route path="*" render={() => <Redirect to={"/profile/sweets"} />} />

        <Footer />
      </div>
    </Switch>
  );
}

export default App;
