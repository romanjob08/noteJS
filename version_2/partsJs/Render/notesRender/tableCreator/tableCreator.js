import {tableHeader} from "./tableHeader";
import {tableBody} from "./tableBody";

export const tableCreator = () => {
    const table = document.createElement('table')
    table.append(tableHeader(), ...tableBody())
    return table;
};