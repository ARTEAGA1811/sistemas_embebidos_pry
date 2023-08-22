import {Circular_Button} from "@/components/Matrix_88/Circular_Button";
import {Button} from "react-bootstrap";
export const Matriz = () => {
    const rows = 8;
    const columns = 8;

    const renderMatrix = () => {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push(<Circular_Button key={`${i}-${j}`} row={i} col={j}/>);
            }
            matrix.push(<div key={i}>{row}</div>);
        }
        return matrix;
    }


    return (
        <div>
            <h1 className={"text-center text-primary"}>Matriz 8x8</h1>
            <div>
                {renderMatrix()}
            </div>
        </div>
    )
}