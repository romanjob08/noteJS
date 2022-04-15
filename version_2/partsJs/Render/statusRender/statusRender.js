import {createStatus} from "./createStatus";

export const statusRender = () => {
    return document.querySelector('.status').append(createStatus())
};