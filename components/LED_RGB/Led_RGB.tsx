import st from "@/styles/custom.module.css";

export const Led_RGB = (props:{color: string}) => {

    const setColor = () => {
        if (props.color == "red") {
            return st.led_red_on;
        }
        if (props.color == "green") {
            return st.led_green_on;
        }
        if (props.color == "blue") {
            return st.led_blue_on;
        }
    }
    return (

        <div className={st.led_box}>
            <div className={st.led_rgb + " " + setColor()}></div>
        </div>

    )
}