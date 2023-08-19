import st from "@/styles/custom.module.css";

export const LED_Unico = ({btnState}:{btnState:boolean}) => {

    const getCurrentState = () => {
        if (btnState) {
            return st.led_blue_on;
        } else {
            return st.led_blue_off;
        }
    }

    return (
        <div className={st.led_box}>
            <div className={st.led_rgb + " " + getCurrentState()}></div>
        </div>

    )
}