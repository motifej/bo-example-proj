import React from "react";
import TestReactInternalState from "../components/TestReactInternalStateComponent";

class TestReactInternalStateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TestState: false
        };
    }
    changeTruth = () => {
        this.setState({ TestState: !this.state.TestState });
    };

    changeTruth1 = () => {
        this.setState({ TestState: !this.state.TestState });
    };
    render() {
        return (
            <div>
                <TestReactInternalState
                    changeTruth1={this.changeTruth1}
                    changeTruth={this.changeTruth}
                />
                {this.state.TestState.toString()}
            </div>
        );
    }
}

export default TestReactInternalStateContainer;
