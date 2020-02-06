import _ from "lodash";

// Конструктор объектов с мастями карт
const CardSuit = function(name, isDeleted = false){
    this.name = name;
    this.isDeleted = isDeleted;

    // метод прототипа конструктора который удаляет элемент и взывает удаление соседних элементов с такой же мастью.
    this.delete = (rowId, columnId, tableElState) => {
        const cellNameSuit = tableElState[rowId][columnId].name;

        this.isDeleted = true;
        // соседние строчки на проверку.
        const siblings = [
            [rowId, columnId + 1],
            [rowId, columnId - 1],
            [rowId + 1, columnId],
            [rowId - 1, columnId]
        ];

        siblings.forEach((sibling) => {
            const [rowNumb, columnNumb] = sibling;

            if (
                tableElState[rowNumb]
                && tableElState[rowNumb][columnNumb]
                && !tableElState[rowNumb][columnNumb].isDeleted
                && tableElState[rowNumb][columnNumb].name === cellNameSuit
            ) {
                tableElState[rowNumb][columnNumb].delete(rowNumb, columnNumb, tableElState);
            }
        });
    };

};

// Создает массив объектов с мастями и с помощью "shuffle" рандомит элементы массива.
const row = () => {
    return _.shuffle([new CardSuit("heart"), new CardSuit("diamond"), new CardSuit("club"), new CardSuit("spade"), new CardSuit("heart"), new CardSuit("diamond")]);
};

// Таблица объектов (ячеек).
const tableElements = [
    row(),
    row(),
    row(),
    row(),
    row(),
    row(),
    row()
];

export default tableElements