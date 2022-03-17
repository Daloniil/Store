import s from "./StyleFooterBottom/FooterBottom.module.css";
import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className={s.footer_bottom}>
      <div className={s.footer_bottom_container}>
        <p>
          2019 - 2022 Доставка товарів <span>PRODTIME</span>
        </p>
      </div>
    </div>
  );
};
export default FooterBottom;
