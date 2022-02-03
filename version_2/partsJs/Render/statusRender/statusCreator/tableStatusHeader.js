import {statusCategories} from "../../../NotesConstants/constantsProj";

export const tableStatusHeader = () => {
    const tableStatHead = document.createElement('tr')
    tableStatHead.append(
        th(),
        th(statusCategories.noteCategory),
        th(statusCategories.active),
        th(statusCategories.archived),
    )
    return tableStatHead
}

const th = (text = '') => {
    const nevTh = document.createElement('th');
    nevTh.textContent = text;
    return nevTh;
};
