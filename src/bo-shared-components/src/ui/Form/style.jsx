import customCheckboxRadioSwitch from "../styles/customCheckboxRadioSwitch.jsx";
import customSelectStyle from "../styles/customSelectStyle.jsx";

const userSearchFormStyle = {
    formCategory: {
        marginBottom: "0",
        color: "#999999",
        fontSize: "14px",
        padding: "10px 0 10px"
    },
    center: {
        textAlign: "center"
    },
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        "@media (min-width: 768px)": {
            width: "500px"
        },
        "@media (min-width: 992px)": {
            width: "700px"
        },
        "@media (min-width: 1200px)": {
            width: "1000px"
        },
        "&:before,&:after": {
            display: "table",
            content: '" "'
        },
        "&:after": {
            clear: "both"
        }
    },
    ...customCheckboxRadioSwitch,
    ...customSelectStyle
};

export default userSearchFormStyle;
