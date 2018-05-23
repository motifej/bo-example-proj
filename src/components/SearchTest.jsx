import EnhancedForm from "../bo-shared-components/src/ui/Form/index";

export const config = {
    name: "searchUsers",
    domain: "http://almond:8081",
    endPoint: "/accounts",
    inputs: [
        {
            name: "first_name",
            value: "first_name"
        },
        {
            name: "last_name",
            value: ""
        }
    ]
};

const Enhanced = EnhancedForm(config);
export default Enhanced;
