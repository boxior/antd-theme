import {regexMap} from "../constants";

export const getIsOnlyInteger = value => {
    return regexMap.integer.test(value);
};