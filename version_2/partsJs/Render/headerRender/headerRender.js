import {crateHeader} from "./headerCreator";

export const headerRender = () => {
    return document.querySelector('.header').append(crateHeader())
};
