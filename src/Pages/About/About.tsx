import s from "./About.module.css";

import React from "react";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCenter from "./AboutCenter/AboutCenter";

const About: React.FC = () => {
  let Scroll = require("react-scroll");
  let scroll = Scroll.animateScroll;
  scroll.scrollToTop();

  return (
    <div className={s.about}>
      <AboutHeader />
      <AboutCenter />
    </div>
  );
};
export default About;
