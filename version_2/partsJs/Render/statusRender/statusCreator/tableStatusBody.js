import {iCreator} from "../../../NotesConstants/constantsProj";
import {catName} from "../../../NotesData/tableStateData";

export const tableStatusBody = () => {
    return catName.map((e) => {
            const statusTrCreator = document.createElement('tr');
            statusTrCreator.append(
                firstTd(e.imageCat),
                td(e.nameCat),
                td(e.active),
                td(e.archived)
            )
            return statusTrCreator;
        }
    );
};

const td = (content = '') => {
    const tdCreator = document.createElement('td');
    tdCreator.textContent = content;
    return tdCreator;
};

const firstTd = (e) => {
    const fTd = document.createElement('td')
    fTd.setAttribute('class', 'tdTableStat')
    fTd.append(iCreator(e))
    return fTd
};