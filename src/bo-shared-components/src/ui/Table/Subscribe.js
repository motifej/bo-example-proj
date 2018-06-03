import React from "react";
import pick from "lodash/pick";

const Subscribe = (Wrapped, config) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true
            };
        }
        setData = data => {
            this.setState({ data, loading: false });
        };
        pickData = (results, headerConfig, cb = this.setData) => {
            const pickedData = results.map((result, index) =>
                pick(result, headerConfig.map((col, index) => col.value))
            );
            cb(pickedData);
        };
        fetchData = (URL, headerConfig, cb = this.pickData) => {
            fetch(URL)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    myJson.success && cb(myJson.result, headerConfig);
                });
        };
        buildData = (URL, headerConfig) => {
            return this.fetchData(URL, headerConfig);
        };

        componentDidMount() {
            this.buildData(`${config.domain}${config.endPoint}`, config.header);
        }
        render() {
            return (
                <Wrapped
                    {...this.props}
                    data={this.state.data}
                    header={config.header}
                />
            );
        }
    };

export default Subscribe;
