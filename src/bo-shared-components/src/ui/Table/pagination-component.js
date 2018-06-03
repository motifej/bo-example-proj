import React, { Component } from "react";
import "./pagination-style.css";

export default class ReactTablePagination extends Component {
    constructor(props) {
        super();
        this.state = {
            page: 1,
            totalPages: 10,
            canNext: true,
            canPrevious: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ page: nextProps.page });
    }

    changePage(page) {
        this.setState({ page: page });
    }

    applyPage() {}

    render() {
        return (
            <div className={"-pagination"}>
                <div className="-previous">
                    <button
                        onClick={() => {
                            if (!this.state.canPrevious) return;
                            this.changePage(page - 1);
                        }}
                        disabled={!this.state.canPrevious}
                        className="-btn"
                    >
                        Previous
                    </button>
                </div>
                <div className="-center">
                    <span className="-pageInfo">
                        Page{" "}
                        <div className="-pageJump">
                            <input
                                type={"number"}
                                onChange={e => {
                                    const nextPage = e.target.value;
                                    if (nextPage > 0)
                                        this.setState({
                                            page: nextPage,
                                            canPrevious: true
                                        });
                                    else {
                                        this.setState({
                                            page: 1,
                                            canPrevious: false
                                        });
                                    }
                                }}
                                value={this.state.page}
                                onBlur={this.applyPage}
                                onKeyPress={e => {
                                    if (e.which === 13 || e.keyCode === 13) {
                                        this.applyPage();
                                    }
                                }}
                            />
                        </div>
                        of{" "}
                        <span className="-totalPages">
                            {this.state.totalPages || 1}
                        </span>
                    </span>
                </div>
                <div className="-next">
                    <button
                        onClick={() => {
                            if (!this.state.canNext) return;
                            this.changePage(this.state.page + 1);
                        }}
                        disabled={!this.state.canNext}
                        className="-btn"
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}
