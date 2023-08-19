import {LED_Unico} from "@/components/LED_Unico/LED_Unico";
import st from "@/styles/custom.module.css";
import Button from "react-bootstrap/Button";
import React from "react";
import Form from 'react-bootstrap/Form';

export const Led_Container = () => {

    const [btnState, setBtnState] = React.useState(false);

    const changeState = () => {
        setBtnState(!btnState);
    }
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