import _ from "lodash";

// Так как мне неизвестна ваша задумка о реализации данной "игры", то я сделал количество ячеек точно таким же
// как в описании задания.
// При желании я могу сделать так чтобы приходящий массив любой длины отрисовался корректно с нужным количеством ячеек.
// Данный же пример логики создан осознанно только для демонстрации.

// Конструктор объектов с мастями карт
const CardSuit = function(name, isDeleted = false){
    this.name = name;
    this.isDeleted = isDeleted;
};

// Добавляем метод в прототип конструктора который удаляет элемент и вызывает удаление соседних элементов такой же масти.
CardSuit.prototype.delete = (rowId, columnId, tableElState) => {
    const cellNameSuit = tableElState[rowId][columnId].name;
    tableElState[rowId][columnId].isDeleted = true;

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
