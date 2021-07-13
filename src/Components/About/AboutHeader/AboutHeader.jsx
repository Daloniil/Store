import s from "./StyleAboutHeader/AboutHeader.module.css";

const AboutHeader = () => {
    return (
        <div className={s.about_header}>
            <div className={s.about_header_container}>
                <div className={s.about_header_text}>
                    <h2>Про нас </h2>
                </div>
            </div>
        </div>
    )
}
export default AboutHeader