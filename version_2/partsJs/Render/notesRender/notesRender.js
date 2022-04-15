import {createNotes} from "./notesCreator";

export const notesRender = (tableName) => {
    return document.querySelector('.container1').append(createNotes(tableName))
};