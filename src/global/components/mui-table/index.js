import React from "React";
import { CircularProgress } from "material-ui";
import pick from "lodash/pick";
import CustomizedTable from "./customized-table";
import headerConfig from "./config";

const Wrapper = Wrapped =>
    class extends React.Component {
        render() {
            return (
                <div className="debug">
                    <Wrapped {...this.props} yop="opt" />
                </div>
            );
        }
    };

const components = {
    CustmTable: CustomizedTable
};

const FindComponent = type => {
    return components[type];
};

export default Wrapper;
