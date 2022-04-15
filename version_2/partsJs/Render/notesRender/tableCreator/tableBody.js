import {createElement, iCreator, randomID} from "../../../NotesConstants/constantsProj";
import {notesData} from "../../../NotesData/notesData";
import {rerenderPage} from "../../../NotesData/tableStateData";

export const tableBody = (tableName) => {
    let filterData;
    if (tableName === 'notes') {
        filterData = notesData.filter((e) => {
            return e.active})
    } else {
        filterData = notesData.filter((e) => {
            return !e.active;
        })
    }
    return filterData.map((e) => {
        const tBodyRou = document.createElement('tr');
        tBodyRou.setAttribute('id', randomID());
        tBodyRou.setAttribute('class', 'tableRou');
        tBodyRou.append(
            firstTd(e.image),
            td(e.name),
            td(e.created),
            tdCategory(e.category),
            td(e.content, 'contCl'),
            td(e.dates),
            lastTd(e.id, tableName)
        );
        return tBodyRou;
    })
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

const td = (content = '', clas = '') => {
    const tdCreator = document.createElement('td');
    tdCreator.setAttribute('class', clas)
    tdCreator.title = content;
    tdCreator.textContent = content;
    return tdCreator;
};

const lastTd = (e, tableName) => {
    const laTd = createElement('td', 'lasHeaderTh')
    laTd.append(
        btnTableRedact(e, tableName),
        btnTableArchive(e, tableName),
        btnTableDelete(e, tableName)
    )
    return laTd;
};

const indexSearch = (id) => {
    return notesData.findIndex(el => el.id ===id)
}

const btnTableDelete = (id) => {
    const btnHeaderTableDel = createElement('button', 'btnTableDelete')
    btnHeaderTableDel.append(iCreator('fa fa-trash'));
    btnHeaderTableDel.addEventListener('click', () => {
        notesData.splice(indexSearch(id), 1)
        rerenderPage();
    });
    return btnHeaderTableDel;
};

const btnTableArchive = (id,tableName) => {
    const btnHeaderTableArh = createElement('button', 'btnTableArchive')
    btnHeaderTableArh.append(iCreator('fa fa-archive'));
    btnHeaderTableArh.addEventListener('click', () => {
        const a = indexSearch(id)
        if (tableName === 'notes') {
            notesData[a].active = true;
            notesData[a].active = false;
        } else {
            notesData[a].active = false;
            notesData[a].active = true;
        }
        rerenderPage();
    })
    return btnHeaderTableArh;
};

const btnTableRedact = (id) => {
    const btnHeaderTableArh = createElement('button', 'btnTableRedact')
    btnHeaderTableArh.append(iCreator('fa fa-pencil'));
    btnHeaderTableArh.addEventListener('click', () => {
        document.querySelector('.note-text').value = notesData.find(el => el.id ===id).content;
        document.querySelector('.select-header').value = notesData.find(el => el.id ===id).category;
        document.getElementById('note-title').value = notesData.find(el => el.id ===id).name;
        notesData.splice(indexSearch(id), 1)
        rerenderPage();
    })
    return btnHeaderTableArh;
};