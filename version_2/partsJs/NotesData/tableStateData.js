import {notesData} from "./notesData";
import {statusRender} from "../Render/statusRender/statusRender";
import {notesRender} from "../Render/notesRender/notesRender";

export const rerenderTableStat = () => {
    document.querySelector('.statisticTable').remove();
    statusRender()
}

export const rerenderNotes = () => {
    document.getElementById('tabCont!notes').remove();
    document.getElementById('tabCont!archive').remove();
    notesRender(TableNames.NOTES)
    notesRender(TableNames.ARCHIVE)
}

export const rerenderPage = () => {
    rerenderNotes()
    rerenderTableStat()
}

export const TableNames = {
    ARCHIVE: 'archive',
    NOTES: 'notes'
}

const numTasks = (namCat, tableName) => {
    if (tableName === TableNames.NOTES) {
        return notesData
            .filter(e => e.category === namCat && e.active).length
    } else {
        return notesData
            .filter(e => e.category === namCat && !e.active).length
    }
}

export const catName = () => {
    return[
    {
        imageCat: 'fa fa-shopping-cart',
        nameCat: 'Task',
        active: numTasks('Task', TableNames.NOTES),
        archived:  numTasks('Task', TableNames.ARCHIVE)
    },
    {
        imageCat: 'fa fa-exclamation-circle',
        nameCat: 'Random Thought',
        active: numTasks('Random Thought', TableNames.NOTES),
        archived:  numTasks('Random Thought', TableNames.ARCHIVE)
    },
    {
        imageCat: 'fa fa-lightbulb-o',
        nameCat: 'Idea',
        active: numTasks('Idea', TableNames.NOTES),
        archived:  numTasks('Idea', TableNames.ARCHIVE)
    }
]};

