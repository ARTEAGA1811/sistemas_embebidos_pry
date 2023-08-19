import React, {useEffect, useState} from "react";
import {Led_RGB} from "@/components/LED_RGB/Led_RGB";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
        console.log("Red: " + red);
        console.log("Green: " + green);
        console.log("Blue: " + blue);
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
                        onChange={(e) => changeRed(e.target.value)}
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
                        onChange={(e) => changeGreen(e.target.value)}
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
                        onChange={(e) => changeBlue(e.target.value)}
                    />
                </section>
                <div className={"d-flex justify-content-center w-100 mt-2"}>
                    <Button variant="outline-primary"
                            className={""}
                            onClick={changeArduinoLedColor}
                    >
                        Seleccionar color
                    </Button>
                </div>


            </div>
        </div>
    );
};
