import s from "./StyleAbout/About.module.css";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCenter from "./AboutCenter/AboutCenter";

const About = () => {
    let Scroll = require('react-scroll');
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop()

    return (
        <div className={s.about}>
            <AboutHeader/>
            <AboutCenter/>
        </div>
    )
}
export default About