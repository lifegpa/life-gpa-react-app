import { LOGIN_START, LOGIN_SUCCESS, GETTING_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL, ADDING_TASK, ADD_TASK, DELETE_TASK, DELETING_TASK, UPDATE_TASK, UPDATING_TASK, TOGGLE_TASK_DONE } from '../actions';



const initialState = {
tasks: [], 
loggingIn: false,
gettingData: false,
updatingTask: false,
addingTask: false,
gettingTask: false,
deletingTask: false,
error: null, 
errorStatusCode: null,
token: localStorage.getItem('token')
} 

const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case LOGIN_START: 
            return {
                ...state, 
                loggingIn: true
            }
        case LOGIN_SUCCESS: 
            return {
                ...state, 
                loggingIn: false, 
                token: action.payload
            }
        case GETTING_DATA: 
            return {
                ...state, 
                gettingData: true, 

            }
        case GET_DATA_SUCCESS: 
            return {
                ...state, 
                gettingData: false,
                errorStatusCode: null,
                data: action.payload, 
                error: null,
            }
        case GET_DATA_FAIL: 
            return {
                ...state, 
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                gettingData: false
            }
        case ADDING_TASK: 
            return {
                ...state, 
                addingTask: true
            }
        case ADD_TASK: 
            return {
                ...state,
                tasks: action.payload,
                addingTask: false, 
                error: null,
                errorStatusCode: null,
            }
        case DELETING_TASK: 
            return {
                ...state, 
                deletingTask: true
            }
        case DELETE_TASK: 
            return {
                ...state,
                deletingTask: false
            }
        case UPDATING_TASK: 
            return {
                ...state,
                updatingTask: true
            }
        case UPDATE_TASK: 
            return {
                ...state, 
                updatingTask: false, 
                error: null,
                errorStatusCode: null,
                tasks: action.payload
            }
        case TOGGLE_TASK_DONE: 
            return {
                ...state,
                tasks: action.payload
            }
        default: 
        return state;
    }
} 

export default reducer; 



// case GETTING_TASK: 
//             return { 
//                 ...state, 
//                 gettingTask: true} 
//         case GET_TASK: 
//             return {
//                 ...state, 
//                 tasks: action.payload, 
//                 gettingTask: false}

