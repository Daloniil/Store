import s from "./StyleAbout/About.module.css";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCenter from "./AboutCenter/AboutCenter";
import React from "react";

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
