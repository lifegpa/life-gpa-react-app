// imports 

import axios from 'axios';
import { history } from '../helpers/history'; 

// login 

export const LOG_IN = "LOG_IN";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_OUT = "LOG_OUT"; 


// sign up 

export const SIGN_UP = "SIGN_UP"; 
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"; 
export const SIGNUP_FAIL = "SIGNUP_FAIL";

// retrieve data 

export const GETTING_DATA = "GETTING_DATA" ;
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"; 
export const GET_DATA_FAIL = "GET_DATA_FAIL"; 

//errors 

export const UNAUTHORIZED_USER = "UNAUTHORIZED_USER";


// tasks 
export const GET_TASK = "GET_TASK";
export const GETTING_TASK = "GETTING_TASK";
export const ADD_TASK = "ADD_TASK"; 
export const ADDING_TASK = "ADDING_TASK";
export const ADD_TASK_FAIL = "ADD_TASK_FAIL";
export const DELETE_TASK = "DELETE_TASK";
export const DELETING_TASK = "DELETING_TASK";
export const DELETE_TASK_FAIL = "DELETE_TASK_FAIL"; 
export const UPDATE_TASK = "UPDATE_TASK"; 
export const UPDATING_TASK = "UPDATING_TASK";
export const UPDATE_TASK_FAIL = "UPDATE_TASK_FAIL";

//  grade tasks
export const SUBMIT_DAILY_TASKS = "SUBMIT_DAILY_TASKS"; 
export const TOGGLE_TASK_DONE = "TOGGLE_TASK_DONE";  

// GPAS 

export const GET_GPA_SUCCESS = "GET_GPA_SUCCESS";
export const GET_GPA_FAIL = "GET_GPA_FAIL";


// ACTION CREATORS 

//LOGIN ACTION CREATOR

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START }); 
    return axios
    .post('https://life-gpa-api.herokuapp.com/api/users/login', credentials)
    .then( res => { localStorage.setItem('token', res.data.token); 
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token}); 
        history.push('/protected');
})
}; 


// SIGNUP ACTION CREATOR 

export const signUp = credentials => dispatch => {
    dispatch({ type: SIGNUP_START }); 
    return axios
    .post('https://life-gpa-api.herokuapp.com/api/users/register', credentials)
    .then( res => { localStorage.setItem('token', res.data.payload); 
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload }); 
        history.push('/protected');
})
}; 

// GET DATA ACTION CREATOR 

export const getData = () => dispatch => {
    axios
    .get('https://life-gpa-api.herokuapp.com/api/tasks', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then(res => {
        console.log("res", res.data)
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data })
    })
    .catch( err => {
        if (err.response.status === 403) {
            dispatch({ type: UNAUTHORIZED_USER, payload: err.response })
        } else {
            dispatch({ type: GET_DATA_FAIL, payload: err.response })
        }
    })
}

// GPAS

export const getGPA = () => dispatch => {
    axios 
    .get('https://life-gpa-api.herokuapp.com/api/tasks/gpa', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
        })
        .then(res => {
            console.log("res", res.data)
            dispatch({ type: GET_GPA_SUCCESS, payload: res.data })
        })
        .catch( err => {
                console.log(err);
            }
        )
}

// ADD TASK 

export const addTask = task => dispatch => {
    return axios
      .post('https://life-gpa-api.herokuapp.com/api/tasks', task, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({ type: ADD_TASK, payload: res.data });
      })
      .catch(err => {
        if (err.response.status === 403) {
          dispatch({ type: UNAUTHORIZED_USER, payload: err.response });
        } else {
          dispatch({ type: ADD_TASK_FAIL, payload: err.response });
        }
      });
}

export const deleteTask = task => dispatch => {
    return axios 
    .delete(`https://life-gpa-api.herokuapp.com/api/tasks/${task._id}`, {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        dispatch({type: DELETE_TASK, payload: res.data }); 
    })
    .catch(err => {
        if (err.response.status === 403) {
        dispatch({ type: UNAUTHORIZED_USER, payload: err.response });
        } else {
        dispatch({ type: DELETE_TASK_FAIL, payload: err.response });
            }
          });
} 

export const openUpdateTask = () => dispatch => {
    dispatch({ type: UPDATING_TASK }); 
}





export const updateTask = task => dispatch => {
    
    return axios 
    .put(`https://life-gpa-api.herokuapp.com/api/tasks/${task._id}`, {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        dispatch({type: UPDATE_TASK, payload: res.data }) 
    })
    .catch(err => {
        if (err.response.status === 403) {
        dispatch({ type: UNAUTHORIZED_USER, payload: err.response });
        } else {
        dispatch({ type: UPDATE_TASK_FAIL, payload: err.response });
            }
          });

} 

// export const submitDailyTasks = () => dispatch => {

// }



export const toggleCompleted = (task) => {

    console.log("togglecompleted task", task);
   return {  
    type: TOGGLE_TASK_DONE, payload: task._id }
    
}; 
