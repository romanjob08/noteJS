const arrMonths = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]

export const categoriesNotes = {
    name: 'Name',
    created: 'Created',
    category: 'Category',
    content: 'Content',
    dates: 'Dates'
};

export const statusCategories = {
    noteCategory: 'Note Category',
    active: 'Active',
    archived: 'Archived'
};

export const categoriesState = {
    task: 'Task',
    randomThought: 'Random Thought',
    idea: 'Idea'
};

export const createElement = (type = '', elClass = '') => {
    const el = document.createElement(type);
    el.setAttribute('class', elClass);
    return el;
};

export const iCreator = (link) => {
    return createElement('i', link);
};

export const dataAdd = () => {
    let t = new Date(Date.now());
    let Y = t.getFullYear();
    let M = arrMonths[t.getMonth() - 1];
    let D = addLeadingZero(t.getDay());
  return `${M} ${D},${Y}`
}

const addLeadingZero = (d) => {
    return(d < 10) ? '0' + d : d;
}

export const imageShoppingCart = "fa fa-shopping-cart";
export const imageLightBulb = "fa fa-lightbulb-o";
export const imageExclamation = "fa fa-exclamation-circle";

export const getDateFromText = (content) => {
    const regExp = /(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/\d{4}/g;
    const dates = content.match(regExp);
    if (dates && dates.length) {
        console.log(dates.join(', '))
        return dates.join(', ');
    } else {
        return null;
    }
}

export const randomID = () => {
    return "id" + Math.random().toString(16).slice(2);
}