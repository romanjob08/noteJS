import {createElement} from "../../NotesConstants/constantsProj";
import {tableCreator} from "./tableCreator/tableCreator";

export const createNotes = () => {
    const h2 = document.createElement('h2');
    h2.textContent = 'Your Notes'
    const hr = document.createElement('hr')
    const divCont1 = createElement('div', 'tableContent');
    divCont1.append(h2, hr, notesContent())
    return divCont1;
};

const notesContent = () => {
    const notCont = createElement('div','notes content')
    notCont.append(tableCreator())
    return notCont;
};

