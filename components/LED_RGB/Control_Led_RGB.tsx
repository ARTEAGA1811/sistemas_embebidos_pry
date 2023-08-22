import React, {useEffect, useState} from "react";
import {Led_RGB} from "@/components/LED_RGB/Led_RGB";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export const Control_Led_RGB = () => {
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const changeRed = (value: any) => {
        setRed(value);
    }

    const changeGreen = (value: any) => {
        setGreen(value);
    }

    const changeBlue = (value: any) => {
        setBlue(value);
    }

    const changeArduinoLedColor = () => {
        const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || 'xd';
        const SET_COLOR_PATH = process.env.NEXT_PUBLIC_RGB_COLOR_PATH || '';
        const URL = BASE_PATH + SET_COLOR_PATH;
        console.log(typeof red);
        console.log(typeof green);
        console.log(typeof blue);
        axios.post(URL, {
                rojo: red,
                verde: green,
                azul: blue
            }
        ).then(
            (response) => {
                console.log(response.status);
                console.log(response.data);
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        )
    }

    return (
        <div>
            <h1 className={"text-center text-primary"}>Control Led RGB</h1>
            <div>
                <Led_RGB red={red} green={green} blue={blue}/>
                <section className={"d-flex justify-content-center gap-2"}>
                    <Form.Control
                        type={"number"}
                        min={0}
                        max={255}
                        size={"sm"}
                        id="r"
                        aria-describedby="r"
                        className={"w-50 fw-bold"}
                        value={red}
                        onChange={(e) => changeRed(parseInt(e.target.value))}
                    />
                    <Form.Control
                        type="number"
                        size={"sm"}
                        min={0}
                        max={255}
                        id="g"
                        aria-describedby="r"
                        className={"w-50 fw-bold"}
                        value={green}
                        onChange={(e) => changeGreen(parseInt(e.target.value))}
                    />
                    <Form.Control
                        type="number"
                        size={"sm"}
                        min={0}
                        max={255}
                        id="b"
                        aria-describedby="r"
                        className={"w-50 fw-bold"}
                        value={blue}
                        onChange={(e) => changeBlue(parseInt(e.target.value))}
                    />
                </section>
                <div className={"d-flex justify-content-center w-100 mt-2"}>
                    <Button variant="outline-primary"
                            className={""}
                            onClick={changeArduinoLedColor}
                    >
                        Enviar
                    </Button>
                </div>


            </div>
        </div>
    );
};
