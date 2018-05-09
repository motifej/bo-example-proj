import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-modal";
import { OpenModal, CloseModal } from "../../actions";
import Button from "./button/index";
import ToolTip from "./tool_tip";
import Title from "./title/Title";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        borderWidth: "3px",
        borderRadius: "10px"
    }
};

class modalWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }
    render() {
        return (
            <div>
                <Button
                    onClick={this.openModal}
                    disabled={this.props.disabled}
                    text={this.props.btntitle || "OPEN MODAL"}
                    type="MODAL_BUTTON_DEFAULT"
                />
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <Title text={this.props.title} />
                    {this.props.body}
                    <Button
                        onClick={this.closeModal}
                        text="Close"
                        type="MODAL_BUTTON_DEFAULT"
                    />
                </Modal>
            </div>
        );
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
        this.props.actions.OpenModal();
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
        this.props.actions.CloseModal();
    };
}

const mapStateToProps = state => ({
    isModalOpen: state.reducer.globalReducer.isModalOpen
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            OpenModal,
            CloseModal
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(modalWrapper);
