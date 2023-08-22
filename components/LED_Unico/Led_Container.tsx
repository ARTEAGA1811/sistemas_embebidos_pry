import {LED_Unico} from "@/components/LED_Unico/LED_Unico";
import st from "@/styles/custom.module.css";
import Button from "react-bootstrap/Button";
import React, {useEffect} from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";

export const Led_Container = () => {

    const [btnState, setBtnState] = React.useState(false);
    const [fistTime, setFirstTime] = React.useState(true);

    const sendStateMicrocontroller = () => {
        const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || 'xd';
        const LED_PATH = process.env.NEXT_PUBLIC_TOGGLE_LED_PATH || '';
        const URL = BASE_PATH + LED_PATH;
        axios.post(URL, {
            "encendido": btnState
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log("Error")
            console.error(err);
        })
    }
    const changeState = () => {
        setBtnState(!btnState);

    }

    useEffect(() => {
        if (fistTime) {
            setFirstTime(false);
        } else {
            sendStateMicrocontroller();
        }
    }, [btnState])
    return (
        <div>
            <h1 className={"text-center text-primary"}>Led</h1>
            <div className={st.led_container}>
                <LED_Unico btnState={btnState}/>
            </div>
            <div className={"d-flex justify-content-center w-100 mt-2"}>
                <Form>
                    <Form.Check // prettier-ignore
                        size={1}
                        checked={btnState}
                        type="switch"
                        id="custom-switch"
                        label="Apagar / Encender"
                        onChange={changeState}
                        className={"fs-5"}
                    />
                </Form>
            </div>
        </div>
    )
}