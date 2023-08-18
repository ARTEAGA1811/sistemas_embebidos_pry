import  st from "../styles/custom.module.css";
import {Matriz} from "@/components/Matrix_88/Matriz";
import {Datos_Ambientales} from "@/components/Datos_Ambientales";
import {Control_Led_RGB} from "@/components/LED_RGB/Control_Led_RGB";
import {Led_Container} from "@/components/LED_Unico/Led_Container";
export const Main_o = () => {
    return (
        <main className={st.main_container}>
            <Matriz/>
            <Datos_Ambientales/>
            <Control_Led_RGB/>
            <Led_Container/>
        </main>
    );
}