import st from "@/styles/custom.module.css";
import {useState} from "react";

export const Led_RGB = (props:{red: number, green: number, blue: number}) => {


    const setColor = () => {
        return "rgb(" + props.red + ", " + props.green + ", " + props.blue + ")";
    }

    return (

        <div className={st.led_box}>
            <div className={st.led_rgb}
                style={{backgroundColor: setColor()}}
            >
            </div>
        </div>

    )
}