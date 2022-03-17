import { Route } from "react-router-dom";
import React from "react";
import { Pizza as Item } from "../Item/Item";
import { useSelector } from "react-redux";

import { getpizza } from "../../../../../Selectors/Menus-selector";
import { getsneks } from "../../../../../Selectors/Menus-selector";
import { getdrinks } from "../../../../../Selectors/Menus-selector";
import { getsous } from "../../../../../Selectors/Menus-selector";

const Containers: React.FC = () => {
  const pizza = useSelector(getpizza);
  const sneks = useSelector(getsneks);
  const drink = useSelector(getdrinks);
  const sous = useSelector(getsous);

  return (
    <div>
      <Route path="/profile/pizza" render={() => <Item item={pizza} />} />

      <Route path="/profile/sneks" render={() => <Item item={sneks} />} />

      <Route path="/profile/drink" render={() => <Item item={drink} />} />

      <Route path="/profile/sous" render={() => <Item item={sous} />} />
    </div>
  );
};
export default Containers;
