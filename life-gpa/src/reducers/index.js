import { LOGIN_START, LOGIN_SUCCESS, GETTING_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL, ADDING_TASK, ADD_TASK, DELETE_TASK, DELETING_TASK, UPDATE_TASK, UPDATING_TASK, TOGGLE_TASK_DONE, GET_GPA_SUCCESS, GET_GPA_FAIL, SUBMIT_TASKS } from '../actions';



const initialState = {
tasks: [], 
loggingIn: false,
gettingData: false,
updatingTask: false,
addingTask: false,
gettingGPA: false,
gettingTask: false,
deletingTask: false,
submittingTask: false,
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
        case GET_GPA_SUCCESS: 
            return {
                ...state, 
                daily: action.payload.daily,
                weekly: action.payload.weekly,
                monthly: action.payload.monthly,
                allTime: action.payload.allTime,
                error: action.payload.error,
                errorStatusCode: action.payload.status,
                gettingGPA: false
            }
        case GET_GPA_FAIL: 
            return {
                ...state, 
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                gettingGPA: false
            }
        case SUBMIT_TASKS: 
            return {
                ...state,
                gpa: action.payload,
                submittingTask: false
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
        // case UPDATING_TASK: 
        //     return {
        //         ...state,
        //         updatingTask: true
        //     }
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
                data: state.data.map((task) => { 
                    if (action.payload=== task._id) {
                        task.completed = !task.completed
                    } 
                    return task;
                }) 
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

