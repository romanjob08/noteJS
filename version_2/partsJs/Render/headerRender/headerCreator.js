import {categoriesState, dataAdd} from "../../NotesConstants/constantsProj";
import {createElement} from "../../NotesConstants/constantsProj";
import {notesData} from "../../NotesData/notesData";
import {notesRender} from "../notesRender/notesRender";

export const crateHeader = () => {
    const h1 = createElement('h1', 'h1');
    h1.textContent = 'My Notes App';
    const contDiv = createElement('div', 'container');
    contDiv.append(h1, formCreator());
    return contDiv;
};

const formCreator = () => {
    const formHeader = createElement('form', 'header-form');
    formHeader.append(selectCreator(), inputCreator(), textareaCreator(), createHeaderBtnAdd());
    return formHeader;
};

const optionsForSelectHeader = (min) => {
    const category = document.createElement('option');
    category.append(min);
    return category;
}

const selectCreator = () => {
    const selectHeader = createElement('select', 'select-header');
    selectHeader.append(optionsForSelectHeader(categoriesState.task),optionsForSelectHeader(categoriesState.randomThought),optionsForSelectHeader(categoriesState.idea));
    return selectHeader;
}

const inputCreator = () => {
    const inputForHeader = document.createElement('input');
    inputForHeader.setAttribute('type', 'text');
    inputForHeader.setAttribute('id', 'note-title');
    inputForHeader.setAttribute('placeholder', 'Note name');
    return inputForHeader;
};

const textareaCreator = () => {
    const textareaForHeader = createElement('textarea', 'note-text');
    textareaForHeader.setAttribute('id', 'note-text');
    textareaForHeader.setAttribute('placeholder', "Note name");
    return textareaForHeader;
};

const createHeaderBtnAdd = () => {
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
                    id: notesData.length + 1,
                    image: 'fa fa-shopping-cart',
                    name: noteNameValue,
                    created: dataAdd(),
                    category: notesCategoryValue,
                    content: textValue,
                    active: true,
                    archived: false,
                    dates: ''
                }
            )
        }else if (notesCategoryValue === 'Random Thought'){
            notesData.push(
                {
                    id: notesData.length + 1,
                    image: 'fa fa-exclamation-circle',
                    name: noteNameValue,
                    created: dataAdd(),
                    category: notesCategoryValue,
                    content: textValue,
                    active: true,
                    archived: false,
                    dates: ''
                }
            )
        }else if (notesCategoryValue === 'Idea'){
            notesData.push(
                {
                    id: notesData.length + 1,
                    image: 'fa fa-lightbulb-o',
                    name: noteNameValue,
                    created: dataAdd(),
                    category: notesCategoryValue,
                    content: textValue,
                    active: true,
                    archived: false,
                    dates: ''
                }
            )
        }
        document.querySelector('.tableContent').remove();
        notesRender()
        document.querySelector('.note-text').value = '';
        document.getElementById('note-title').value = '';
    })
    buttonForAdd.textContent = 'Add Note'
    return buttonForAdd;
};