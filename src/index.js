import React from "react";
import ReactDom from 'react-dom';
import TableGame from './table/table-elements';
import tableElements from './data/index';

ReactDom.render(
    <TableGame tableElements={tableElements}/>,
    document.getElementById('root')
);