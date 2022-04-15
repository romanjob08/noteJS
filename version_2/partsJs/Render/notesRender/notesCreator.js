import {createElement} from "../../NotesConstants/constantsProj";
import {tableCreator} from "./tableCreator/tableCreator";
import {TableNames} from "../../NotesData/tableStateData";

const getTitle = (tableName) => {
    switch (tableName) {
        case TableNames.NOTES:
            return 'Your Notes'
        case TableNames.ARCHIVE:
            return 'Your Archived Notes';
        default:
            return 'Empty';
    }
}

export const createNotes = (tableName) => {
    const h2 = document.createElement('h2');
    h2.textContent = getTitle(tableName);
    const hr = document.createElement('hr')
    const divCont1 = createElement('div', 'tableContent');
    divCont1.setAttribute('id', `tabCont!${tableName}`)
    divCont1.append(h2, hr, notesContent(tableName))
    return divCont1;
};

const notesContent = (tableName) => {
    const notCont = createElement('div','notes content')
    notCont.append(tableCreator(tableName))
    return notCont;
};

