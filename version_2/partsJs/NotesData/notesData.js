import {categoriesState} from "../NotesConstants/constantsProj";

export let notesData = [
    {
        id: 1,
        image: "fa fa-shopping-cart",
        name: 'Shopping list',
        created: 'April 20,2021',
        category: categoriesState.task,
        content: 'Tomatoes, bread',
        active: true,
        archived: false,
        dates: ''
    },
    {
        id: 2,
        image: "fa fa-exclamation-circle",
        name: 'The theory of evolution',
        created: 'April 27,2021',
        category: categoriesState.randomThought,
        content: 'Human evolution',
        active: true,
        archived: false,
        dates: ''
    },
    {
        id: 3,
        image: "fa fa-lightbulb-o",
        name: 'New Feature',
        created: 'May 05,2021',
        category: categoriesState.idea,
        content: 'Implement updates',
        active: true,
        archived: false,
        dates: '3/5/2021,5/5/2021'
    },
    {
        id: 4,
        image: "fa fa-shopping-cart",
        name: "William Gabbi's",
        created: 'May 07,2021',
        category: categoriesState.task,
        content: 'Power doesn\'t exist',
        active: true,
        archived: false,
        dates: ''
    },
    {
        id: 5,
        image: "fa fa-shopping-cart",
        name: 'Books',
        created: 'May 15,2021',
        category: categoriesState.task,
        content: 'The Lean Startup',
        active: true,
        archived: false,
        dates: ''
    },
]

