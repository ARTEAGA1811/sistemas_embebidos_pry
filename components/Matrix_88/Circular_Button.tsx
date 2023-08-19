import Button from 'react-bootstrap/Button';
import st from "../../styles/custom.module.css";
import {useState} from "react";

export const Circular_Button = (props:{btn_state:boolean, row: number, col: number}) => {

    const [stateBtn, setStateBtn] = useState(props.btn_state);
    const getCurrentState = () => {
        if (stateBtn) {
            return st.led_blue_on;
        } else {
            return st.led_blue_off;
        }
    }

    const changeState = () => {
        setStateBtn(!stateBtn);
    }


    return (
            <button className={st.circular_button + " " + getCurrentState()} onClick={changeState}>
            </button>
    )
}