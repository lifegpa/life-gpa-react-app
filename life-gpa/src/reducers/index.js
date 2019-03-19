import { LOGIN_START, LOGIN_SUCCESS } from '../actions';



const initialState = {
tasks: [], 
loggingIn: false,
updatingTask: false,
addingTask: false,
gettingTask: false,
deletingTask: false,
error: null, 
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
//         case ADDING_TASK: 
//             return {
//                 ...state, 
//                 addingTask: true
//             }
//         case ADD_TASK: 
//             return {
//                 ...state,
//                 tasks: action.payload,
//                 addingTask: false
//             }
//         case DELETING_TASK: 
//             return {
//                 ...state, 
//                 deletingTask: true
//             }
//         case DELETE_TASK: 
//             return {
//                 ...state,
//                 deletingTask: false
//             }
//         case UPDATING_TASK: 
//             return {
//                 ...state,
//                 updatingTask: true
//             }
//         case UPDATE_TASK: 
//             return {
//                 ...state, 
//                 updatingTask: false
//             }
//         case TOGGLE_TASK_DONE: 
//             return {
//                 ...state,
//                 tasks: action.payload
//             }