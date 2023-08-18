import {LED_Unico} from "@/components/LED_Unico/LED_Unico";
import st from "@/styles/custom.module.css";
export const Led_Container = () => {
    return (
        <div>
            <h1 className={"text-center"}>Led</h1>
            <div className={st.led_container}>
                <LED_Unico/>
            </div>
        </div>
    )
}