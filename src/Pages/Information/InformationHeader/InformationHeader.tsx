import s from "./AboutHeader.module.css";
import React from "react";

const InformationHeader: React.FC = () => {
  return (
    <div className={s.about_header}>
      <div className={s.about_header_container}>
        <div className={s.about_header_text}>
          <h2>Інформація і доставка </h2>
        </div>
      </div>
    </div>
  );
};
export default InformationHeader;
