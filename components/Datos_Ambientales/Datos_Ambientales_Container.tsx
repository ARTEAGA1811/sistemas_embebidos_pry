import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useEffect, useState} from "react";
import st from "../../styles/custom.module.css";

export const Datos_Ambientales_Container = () => {

    const [temperatura, setTemperatura] = useState(0);
    const [luz, setLuz] = useState(0);
    const [humedad, setHumedad] = useState(0);

    const getFakeData = () => {
        setTemperatura(Math.floor(Math.random() * 100));
        setLuz(Math.floor(Math.random() * 100));
        setHumedad(Math.floor(Math.random() * 100));
    }

    useEffect(() => {
        setInterval(getFakeData, 5000);
    }, [])
    //getFakeData each 5 seconds

    return (
        <div>
            <h1 className={"text-center text-primary" + " " + st.title}>Datos Ambientales</h1>
            <Table>
                <tbody>
                <tr>
                    <td className={"fs-5"}>Temperatura</td>
                    <td>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="--"
                                aria-label="temperatura"
                                aria-describedby="basic-addon2"
                                readOnly
                                className={"fw-bolder"}
                                value={temperatura}

                            />
                            <InputGroup.Text id="basic-addon2">°C</InputGroup.Text>
                        </InputGroup>
                    </td>
                </tr>
                <tr>
                    <td className={"fs-5"}>Luz</td>
                    <td>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="--"
                                aria-label="Luz"
                                aria-describedby="basic-addon2"
                                readOnly
                                className={"fw-bolder"}
                                value={luz}
                            />
                            <InputGroup.Text id="basic-addon2">Lx</InputGroup.Text>
                        </InputGroup>
                    </td>
                </tr>
                <tr>
                    <td className={"fs-5"}>Humedad</td>
                    <td>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="--"
                                aria-label="Humedad"
                                aria-describedby="basic-addon2"
                                readOnly
                                className={"fw-bolder"}
                                value={humedad}
                            />
                            <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                        </InputGroup>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}