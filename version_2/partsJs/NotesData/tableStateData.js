import {notesData} from "./notesData";

const numActTask = notesData.filter(e => e.category === 'Task' && e.active === true && e.archived === false);
const numActRandTh = notesData.filter(e => e.category === 'Random Thought' && e.active === true && e.archived === false);
const numActIdea = notesData.filter(e => e.category === 'Idea' && e.active === true && e.archived === false);
const numArchTask = notesData.filter(e => e.category === 'Task' && e.active === false && e.archived === true);
const numArchRandTh = notesData.filter(e => e.category === 'Random Thought' && e.active === false && e.archived === true);
const numArchIdea = notesData.filter(e => e.category === 'Idea' && e.active === false && e.archived === true);

export const catName = [
    {
        imageCat: 'fa fa-shopping-cart',
        nameCat: 'Task',
        active: numActTask.length,
        archived: numArchTask.length
    },
    {
        imageCat: 'fa fa-exclamation-circle',
        nameCat: 'Random Thought',
        active: numActRandTh.length,
        archived: numArchRandTh.length
    },
    {
        imageCat: 'fa fa-lightbulb-o',
        nameCat: 'Idea',
        active: numActIdea.length,
        archived: numArchIdea.length
    }
];

