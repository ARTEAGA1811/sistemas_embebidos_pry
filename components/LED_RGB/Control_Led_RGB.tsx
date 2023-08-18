import st from "../../styles/custom.module.css";
import {Led_RGB} from "@/components/LED_RGB/Led_RGB";

export const Control_Led_RGB = () => {
    const color_list = ["red", "green", "blue"]
    return (
        <div>
            <h1 className={""}>Control Led RGB</h1>
            <div className={st.led_rgb_container}>
                {color_list.map((color, index) => {
                    return <Led_RGB key={index} color={color}/>
                })}
            </div>
        </div>
    )
}