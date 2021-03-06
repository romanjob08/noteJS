import {tableStatusHeader} from "./statusCreator/tableStatusHeader";
import {tableStatusBody} from "./statusCreator/tableStatusBody";

export const createStatus = () => {
    const table = document.createElement('table')
    table.setAttribute('class', 'statisticTable')
    table.append(tableStatusHeader(), ...tableStatusBody());
    return table;
};