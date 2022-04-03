import SliderSale from "../../Components/SliderSale/SliderSale";
import MenuBar from "./MenuBar/MenuBar";
import Containers from "./MenuBar/Containers/Containers";

import React from "react";

const Menu: React.FC = () => {
  return (
    <div style={{ margin: "0 0 -20px 0" }}>
      <SliderSale />
      <MenuBar />
      <Containers />
    </div>
  );
};
export default Menu;
