import Button from 'react-bootstrap/Button';
import st from "../../styles/custom.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

export const Circular_Button = (props: { row: number, col: number }) => {

    const [stateBtn, setStateBtn] = useState(false);
    const [firstRender, setFirstRender] = useState(true);
    const getCurrentState = () => {
        if (stateBtn) {
            return st.led_red_on;
        } else {
            return st.led_red_off;
        }
    }

    const send_state_microcontroler = async () => {
        const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || 'xd';
        const MATRIX_PATH = process.env.NEXT_PUBLIC_MATRIX_PATH || '';
        const URL = BASE_PATH + MATRIX_PATH;

        console.log(URL);
        try {

            const bodyMatriz: MatrixBodyInterface = {
                fila: props.row,
                columna: props.col,
                encendido: stateBtn
            }
            console.log(bodyMatriz);
            const response = await axios.post(URL, bodyMatriz);
            //Get the response data
            console.log(response.status);
            console.log(response.data);

        } catch (error) {
            console.log("Error");
            console.log(error);
        }
    }

    const changeState = async () => {
        setStateBtn(!stateBtn);
    }

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }else {
            send_state_microcontroler().then().catch();
        }
    }, [stateBtn])


    return (
        <button className={st.circular_button + " " + getCurrentState()} onClick={changeState}>
        </button>
    )
}