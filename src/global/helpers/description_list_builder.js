import * as React from "react";
import axios from "axios";
import API_SERVER_URL from "../constants";
import Input from "../components/input/Input";

class DescriptionListBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoading: false
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        this.fetchData();
    }
    fetchData = () => {
        const { method, endPoint, data } = this.props;
        axios({
            method,
            url: `${API_SERVER_URL}${endPoint}`,
            data
        })
            .then(response => {
                this.setState({ isLoading: false });
                console.log("response", response);
                this.setState({ user: response.data.result });
                return;
            })
            .catch(err => {
                this.setState({ isLoading: false });
                return err;
            });
    };
    onChange = event => {
        const user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };
    handleKeyPress = event => {
        if (event.key === "Enter") {
            this.setState({ isLoading: true });
            const newValue = event.target.value;
            const inputName = event.target.name;
            const data = {}; //should check for data type before you make the request
            data[inputName] = newValue;
            axios
                .put(`${API_SERVER_URL}${this.props.endPoint}`, data)
                .then(response => {
                    console.log("reso", response);
                })
                .catch(error => {
                    console.log("error");
                });
        }
    };
    render() {
        return (
            <div>
                {this.props.config.map((obj, index) => {
                    if (obj.type === "editableDescriptionListItem") {
                        return (
                            <div key={index}>
                                <Input
                                    labelId="2"
                                    key={index}
                                    value={this.state.user[obj.name] || ""}
                                    id={index}
                                    name={obj.name}
                                    label={obj.label}
                                    onChange={this.onChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                            </div>
                        );
                    } else if (obj.type === "descriptionListItem") {
                        return (
                            <dl
                                className="f6 dib lh-title mv2 dib ml1 w-40"
                                key={index}
                            >
                                <dt className="dib b bb">{obj.label}</dt>
                                <dd
                                    className="dib ml1 gray"
                                    id="firstNameAtInformation"
                                >
                                    {this.state.user[obj.name] || ""}
                                </dd>
                            </dl>
                        );
                    }
                })}
            </div>
        );
    }
}

export default DescriptionListBuilder;
