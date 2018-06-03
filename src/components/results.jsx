// import React from "react";
// import { connect } from "react-redux";
// import DefaultTable from "../bo-shared-components/src/ui/Table/default-table";
// import { BuildDefaultTable } from "../bo-shared-components/src/ui/Table/";
//
// const config = {
//     domain: "http://almond:8081",
//     endPoint: "accounts",
//     resultsHeader: [
//         {
//             value: "id",
//             name: "Id"
//         },
//         {
//             value: "first_name",
//             name: "First Name"
//         },
//         {
//             value: "last_name",
//             name: "Last Name"
//         }
//     ]
// };
//
// const buildQuery = list => {
//     if (!list) return "";
//     let query = "";
//     Object.entries(list).forEach(([key, value]) => {
//         query += `${key}=${value}&`;
//     });
//     return query;
// };
//
// const Results = props => {
//     console.log("dis", props);
//     config.query = buildQuery(props.state && props.state.values);
//     const NewComp = BuildDefaultTable(config);
//     return <div>hell</div>;
// };
//
// const mapStateToProps = state => ({
//     state: state.form.SearchForm
// });
//
// export default connect(mapStateToProps)(Results);
