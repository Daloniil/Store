import s from "./StyleContacs/Contacs.module.css"
import {ContacsHeader} from "./ContacsHeader/ContacsHeader";
import {ContacsCenter} from "./ContacsCenter/ContacsCenter";

export const Contacs = () => {
    return (
        <div className={s.content}>
            <ContacsHeader/>
            <ContacsCenter/>
        </div>
    )
}
