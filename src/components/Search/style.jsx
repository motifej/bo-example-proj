const searchFormStyle = {
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
    }
};

export default searchFormStyle;
