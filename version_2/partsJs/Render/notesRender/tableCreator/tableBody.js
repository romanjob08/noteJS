import {createElement, iCreator} from "../../../NotesConstants/constantsProj";
import {notesData} from "../../../NotesData/notesData";

export const tableBody = () => {
    return notesData.map((e) => {
            const tBodyRou = document.createElement('tr');
            tBodyRou.append(
                firstTd(e.image),
                td(e.name),
                td(e.created),
                tdCategory(e.category),
                td(e.content),
                td(e.dates),
                lastTd()
            );
            return tBodyRou;
        }
    );
};

const firstTd = (e) => {
    const fTd = document.createElement('td')
    fTd.append(iCreator(e))
    return fTd
};

const tdCategory = (cont = '') => {
    const cat = document.createElement('td');
    cat.textContent = cont;
    return cat;
};

const td = (content = '') => {
    const tdCreator = document.createElement('td');
    tdCreator.textContent = content;
    return tdCreator;
};

const lastTd = () => {
    const laTd = createElement('td', 'lasHeaderTh')
    laTd.append(
        btnTableRedact(),
        btnTableArchive(),
        btnTableDelete()
    )
    return laTd;
};

const btnTableDelete = () => {
    const btnHeaderTableDelOll = createElement('button', 'btnTableDelete')
    btnHeaderTableDelOll.append(iCreator('fa fa-trash'));
    return btnHeaderTableDelOll;
};

const btnTableArchive = () => {
    const btnHeaderTableArhOll = createElement('button', 'btnTableArchive')
    btnHeaderTableArhOll.append(iCreator('fa fa-archive'))
    return btnHeaderTableArhOll;
};

const btnTableRedact = () => {
    const btnHeaderTableArhOll = createElement('button', 'btnTableRedact')
    btnHeaderTableArhOll.append(iCreator('fa fa-pencil'))
    return btnHeaderTableArhOll;
};