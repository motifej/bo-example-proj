// //@flow

// type Props = {
//     text: string,
//     sortBy: string,
//     sortable: string,
//     onSortClick: Function,
//     thStyle: string,
//     sortedBy: string,
//     sortableThStyle: string
// };

// import React from "react";

// const TableHeader = (props: Props) => {
//     const {
//         text,
//         sortBy,
//         sortable,
//         onSortClick,
//         thStyle,
//         sortedBy,
//         sortableThStyle
//     } = props;

//     if (sortable) {
//         const ascending = !sortedBy.includes("-");
//         const newSort = ascending ? `-${sortBy}` : sortBy;
//         return (
//             <th className={thStyle}>
//                 {text}
//                 <span
//                     onClick={() => onSortClick(newSort)}
//                     className={
//                         sortedBy.includes(sortBy)
//                             ? "pointer green hover-white mr1 ml1"
//                             : "pointer hover-white mr1 ml1"
//                     }>
//                     {ascending ? (
//                         <div className="di">&uarr;</div>
//                     ) : (
//                         <div className="di">&darr;</div>
//                     )}
//                 </span>
//             </th>
//         );
//     } else {
//         return <th className={thStyle}>{text}</th>;
//     }
// };

// export default TableHeader;
