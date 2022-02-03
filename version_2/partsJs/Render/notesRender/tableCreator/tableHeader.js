import {categoriesNotes, createElement} from "../../../NotesConstants/constantsProj";
import {iCreator} from "../../../NotesConstants/constantsProj";

export const tableHeader = () => {
    const tHeadRou = document.createElement('tr')
    tHeadRou.append(
        th(),
        th(categoriesNotes.name),
        th(categoriesNotes.created),
        th(categoriesNotes.category),
        th(categoriesNotes.content),
        th(categoriesNotes.dates),
        lastTh(),
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

const lastTh = () => {
    const laTh = createElement('th', 'lasHeaderTh')
    laTh.append(
        btnHeaderTableArchiveOll(),
        btnHeaderTableDeleteOll()
        )
    return laTh;
}

const btnHeaderTableDeleteOll = () => {
    const btnHeaderTableDelOll = createElement('button', 'btnHeaderTableDeleteOll')
    btnHeaderTableDelOll.append(iCreator('fa fa-trash'))
    return btnHeaderTableDelOll;
}

const btnHeaderTableArchiveOll = () => {
    const btnHeaderTableArhOll = createElement('button', 'btnHeaderTableArchiveOll')
    btnHeaderTableArhOll.append(iCreator('fa fa-archive'))
    return btnHeaderTableArhOll;
}


