import {createNotes} from "./notesCreator";

export const notesRender = () => {
    return document.querySelector('.container1').append(createNotes())
};