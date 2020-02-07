import React, { useState } from "react";
import "./style.css";

const TableGame = ({tableElements}) => {
    const [tableElState, setTableElState] = useState(tableElements);

    const onClick = (cell, rowId, columnId) => {
        cell.delete(rowId, columnId, tableElState);
        setTableElState([...tableElState]);
    };

    return(
        <table>
            <tbody>
                {
                    tableElState.map((row, i) => {
                        return(
                            <tr key={i}>
                                {
                                    row.map((cell, j) => {
                                        return(
                                            <td
                                                onClick={() => onClick(cell, i, j)} className={`${cell.name} ${cell.isDeleted && "deleted"}`}
                                                key={ `${i} + ${j}` }
                                            >
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
};

export default TableGame;
