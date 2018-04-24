import React from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavigateToMe from "../components/NavigateToMe";

class TestRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    NavigateBack = () => {
        return this.props.history.goBack();
    };

    render() {
        console.log("this.props", this.props);
        return (
            <div>
                test router
                <NavigateToMe goBack={this.NavigateBack} />
                <Link to="/about">About</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TestRouter)
);
