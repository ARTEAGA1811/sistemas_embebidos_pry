import st from "@/styles/custom.module.css";

export const LED_Unico = () => {
    return (
        <div className={st.led_box}>
            <div className={st.led_unico + " " + st.led_blue_off}></div>
        </div>

    )
}