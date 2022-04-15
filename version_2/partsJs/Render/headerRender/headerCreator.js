import {categoriesState} from "../../NotesConstants/constantsProj";
import {createElement} from "../../NotesConstants/constantsProj";
import {createHeaderBtnAdd} from "./buttonAdd";

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
    inputForHeader.setAttribute('placeholder', 'Give a name to your note');
    return inputForHeader;
};

const textareaCreator = () => {
    const textareaForHeader = createElement('textarea', 'note-text');
    textareaForHeader.setAttribute('id', 'note-text');
    textareaForHeader.setAttribute('placeholder', "Write your note");
    return textareaForHeader;
};