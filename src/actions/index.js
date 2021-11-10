export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY = "MEMORY";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const EQUALS = "EQUALS";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const switchOperations = (operator) => {
    return ({type:CHANGE_OPERATION, payload: operator});
}
export const memory = () => {
    return ({type:MEMORY});
}
export const clearMemory = () => {
    return ({type:CLEAR_MEMORY});
}
export const applyMemory = () => {
    return ({type:APPLY_MEMORY});
}
export const equals = () => {
    return ({type:EQUALS});
}
export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}