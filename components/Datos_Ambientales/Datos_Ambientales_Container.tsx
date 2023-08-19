import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Datos_Ambientales_Container = () => {
    return (
        <div>
            <h1>Datos Ambientales</h1>
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