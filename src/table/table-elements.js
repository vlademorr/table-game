import React, { useState } from "react";
import "./style.css";


// Так как мне неизвестна ваша задумка о реализации данной "игры", то я сделал массив и количество ячеек точно таким же как в описании задания.
// При желании я могу сделать так чтобы приходящий массив любой длины отрисовался корректно с нужным количеством ячеек.
// Данный же пример логики создан осознанно только для демонстрации.

// Делает элементы "приходящего с сервера массива" - рандомно разбросанными (в реальном коде будет принят как props).



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