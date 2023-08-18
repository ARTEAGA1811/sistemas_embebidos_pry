import Button from 'react-bootstrap/Button';
import st from "../../styles/custom.module.css";

export const Circular_Button = (props:{btn_state:boolean, row: number, col: number}) => {
    const setColor = () => {
        if (props.btn_state) {
            return st.button_on;
        } else {
            return st.button_off;
        }
    }
    return (
            <button className={st.circular_button + " " + setColor()}>
            </button>
    )
}