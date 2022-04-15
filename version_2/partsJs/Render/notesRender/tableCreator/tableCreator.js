import {tableHeader} from "./tableHeader";
import {tableBody} from "./tableBody";

export const tableCreator = (tableName) => {
    const table = document.createElement('table')
    table.setAttribute('id', tableName)
    table.append(tableHeader(tableName), ...tableBody(tableName))
    return table;
};