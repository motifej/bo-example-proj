// //@flow

// type Props = {
//     data: Object,
//     trBodyStyle: string,
//     tdStyle: string,
//     index: number,
//     onRowClick: Function,
//     formatter: Function
// };
// import React from "react";

// const TableRow = (props: Props) => {
//     const {
//         data,
//         trBodyStyle,
//         tdStyle,
//         onRowClick,
//         formatter,
//         customElementsObj
//     } = props;
//     return (
//         <tr className={trBodyStyle} onClick={onRowClick}>
//             {Object.keys(data).map((key, index) => {
//                 return (
//                     <td key={index} className={tdStyle}>
//                         {formatter(key, data[key], index) || data[key]}
//                     </td>
//                 );
//             })}
//         </tr>
//     );
// };

// export default TableRow;
