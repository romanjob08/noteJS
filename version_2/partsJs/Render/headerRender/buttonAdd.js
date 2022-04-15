import {createElement, dataAdd, getDateFromText, randomID} from "../../NotesConstants/constantsProj";
import {notesData} from "../../NotesData/notesData";
import {notesRender} from "../notesRender/notesRender";
import {rerenderNotes, rerenderPage, rerenderTableStat, TableNames} from "../../NotesData/tableStateData";

export const createHeaderBtnAdd = () => {
    const buttonForAdd = createElement('button', 'add-btn');
    buttonForAdd.addEventListener('click', (e) => {
        e.preventDefault();
        const textValue = document.querySelector('.note-text').value;
        const noteNameValue = document.getElementById('note-title').value;
        const notesCategoryValue = document.querySelector('.select-header').value;
        if (textValue === '' || noteNameValue === '') {
            alert('Please add note title and details')
        }else if (notesCategoryValue === 'Task'){
            notesData.push(
                {
                    id: randomID(),
                    image: 'fa fa-shopping-cart',
                    name: noteNameValue,
                    created: dataAdd(),
                    category: notesCategoryValue,
                    content: textValue,
                    active: true,
                    archived: false,
                    dates: getDateFromText(textValue)
                }
            )
        }else if (notesCategoryValue === 'Random Thought'){
            notesData.push(
                {
                    id: randomID(),
                    image: 'fa fa-exclamation-circle',
                    name: noteNameValue,
                    created: dataAdd(),
                    category: notesCategoryValue,
                    content: textValue,
                    active: true,
                    archived: false,
                    dates: getDateFromText(textValue)
                }
            )
        }else if (notesCategoryValue === 'Idea'){
            notesData.push(
                {
                    id: randomID(),
                    image: 'fa fa-lightbulb-o',
                    name: noteNameValue,
                    created: dataAdd(),
                    category: notesCategoryValue,
                    content: textValue,
                    active: true,
                    archived: false,
                    dates: getDateFromText(textValue)
                }
            )
        }
        document.querySelector('.note-text').value = '';
        document.getElementById('note-title').value = '';
        document.querySelector('.select-header').value = 'Task';
        rerenderPage()
    })
    buttonForAdd.textContent = 'Add Note'
    return buttonForAdd;
};