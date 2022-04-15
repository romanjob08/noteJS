import {categoriesNotes, createElement} from "../../../NotesConstants/constantsProj";
import {iCreator} from "../../../NotesConstants/constantsProj";
import {notesData} from "../../../NotesData/notesData";
import {rerenderPage} from "../../../NotesData/tableStateData";

export const tableHeader = (tableName) => {
    const tHeadRou = document.createElement('tr')
    tHeadRou.append(
        th(),
        th(categoriesNotes.name),
        th(categoriesNotes.created),
        th(categoriesNotes.category),
        th(categoriesNotes.content),
        th(categoriesNotes.dates),
        lastTh(tableName),
        )
    return tHeadRou
}

const th = (text = '') => {
    const thCreator = document.createElement('th')
    if (text === '') {
        return thCreator
    }else if (text){
        thCreator.textContent = text
        return thCreator
    }
};

const lastTh = (tableName) => {
    const laTh = createElement('th', 'lasHeaderTh')
    laTh.append(
        btnHeaderTableArchiveAll(tableName),
        btnHeaderTableDeleteAll(tableName)
        )
    return laTh;
}

const btnHeaderTableDeleteAll = (tableName) => {
    const btnHeaderTableDelAll = createElement('button', 'btnHeaderTableDeleteAll')
    btnHeaderTableDelAll.append(iCreator('fa fa-trash'))
    btnHeaderTableDelAll.addEventListener("click", () => {
        let a;
        if (tableName === 'notes') {
            a = notesData.filter((e) => {
                return !e.active})
        } else {
            a = notesData.filter((e) => {
                return e.active})
        }
        notesData.splice(0);
        notesData.push(...a)
        document
            .getElementById(tableName)
            .querySelectorAll('.tableRou')
            .forEach((row) =>row.remove());
        rerenderPage()
    })
    return btnHeaderTableDelAll;
}
// All -> All
const btnHeaderTableArchiveAll = (tableName) => {
    const btnHeaderTableArhAll = createElement('button', 'btnHeaderTableArchiveAll')
    btnHeaderTableArhAll.append(iCreator('fa fa-archive'))
    btnHeaderTableArhAll.addEventListener("click", () => {
        if (tableName === 'archive') {
            notesData.forEach((e) => {
                e.active = true
                e.archived = false
            });
        } else {
            notesData.forEach((e) => {
                e.active = false
                e.archived = true
            });
        }
        document
            .getElementById(tableName)
            .querySelectorAll('.tableRou')
            .forEach((row) =>row.remove());
        rerenderPage()
    })
    return btnHeaderTableArhAll;
}