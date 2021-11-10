import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, CLEAR_MEMORY, MEMORY, APPLY_MEMORY, EQUALS } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0,
    display:0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation),
                display:action.payload
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload,
                display:action.payload
            });
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total:0,
                display:0
            })
        case(MEMORY):
            return({
                ...state,
                total: state.total
            })
        case(APPLY_MEMORY):
            return({
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            })
        case(CLEAR_MEMORY):
            return({
                ...state,
                memory: 0
            })
        case (EQUALS):
            return ({
                ...state,
                display: state.total
            })
        default:
            return state;
    }
}

export default reducer;