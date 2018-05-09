// import React from "react";
// import { T } from "../../helpers/translate";
// import TableHeader from "./Table_Header.jsx";
// import TableRow from "./Table_Row.jsx";
// import Button from "../button/index";
// import Styles from "./styles";

// const buildTableColumns = (columns, currentStyle, onSortClick, sortedBy) =>
//     columns.map((col, index) => (
//         <TableHeader
//             text={col.name}
//             sortBy={col.value}
//             thStyle={currentStyle.ThStyle}
//             sortedBy={sortedBy}
//             sortable={col.sortable}
//             onSortClick={onSortClick}
//             key={index}
//         />
//     ));

// const buildTableRows = (rows, formatter, currentStyle, onRowClick) =>
//     rows.map((row, index) => (
//         <TableRow
//             data={row}
//             index={index}
//             key={index}
//             onRowClick={() => onRowClick(row.id)}
//             formatter={formatter}
//             trBodyStyle={
//                 onRowClick
//                     ? currentStyle.TrBodyStyleWithPointer
//                     : currentStyle.TrBodyStyle
//             }
//             tdStyle={currentStyle.TdStyle}
//         />
//     ));

// const Table = ({
//     type,
//     columns,
//     rows,
//     onRowClick,
//     onSortClick,
//     formatter,
//     sortedBy,
//     addPagination,
//     onPreviousClick,
//     onNextClick,
//     isPreviousButtonDisabled,
//     isNextButtonDisabled
// }) => {
//     const currentStyle = Styles[`${type}`] || Styles["Default_Table"];
//     return (
//         <div className={currentStyle.WrapperStyle}>
//             <div className={currentStyle.TableWrapperStyle}>
//                 <table className={currentStyle.TableStyle} cellSpacing="0">
//                     <thead className={currentStyle.TheadStyle}>
//                         <tr className={currentStyle.TrHeaderStyle}>
//                             {buildTableColumns(
//                                 columns,
//                                 currentStyle,
//                                 onSortClick,
//                                 sortedBy
//                             )}
//                         </tr>
//                     </thead>
//                     <tbody className={currentStyle.TbodyStyle}>
//                         {buildTableRows(
//                             rows,
//                             formatter,
//                             currentStyle,
//                             onRowClick
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//             {addPagination ? (
//                 <div className={currentStyle.ButtonsWrapper}>
//                     <Button
//                         type="Table_Previous_Button"
//                         onClick={onPreviousClick}
//                         disabled={isPreviousButtonDisabled}
//                         text={T("previous.page.button")}
//                     />
//                     <Button
//                         type="Table_Next_Button"
//                         onClick={onNextClick}
//                         disabled={isNextButtonDisabled}
//                         text={T("next.page.button")}
//                     />
//                 </div>
//             ) : null}
//         </div>
//     );
// };

// export default Table;
