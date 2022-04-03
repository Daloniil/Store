import { Route } from "react-router-dom";
import React from "react";
import { Pizza as Item } from "./Item/Item";
import { useSelector } from "react-redux";
import {
  getdrinks,
  getpizza,
  getsneks,
  getsous,
} from "../../../../Selectors/Menu-selector";

const Containers: React.FC = () => {
  const pizza = useSelector(getpizza);
  const sneks = useSelector(getsneks);
  const drink = useSelector(getdrinks);
  const sous = useSelector(getsous);

  return (
    <div>
      <Route path="/profile/sweets" render={() => <Item item={pizza} />} />

      <Route path="/profile/milk" render={() => <Item item={sneks} />} />

      <Route path="/profile/drink" render={() => <Item item={drink} />} />

      <Route path="/profile/grocery" render={() => <Item item={sous} />} />
    </div>
  );
};
export default Containers;
