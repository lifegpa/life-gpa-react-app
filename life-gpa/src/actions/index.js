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


// tasks 
export const GET_TASK = "GET_TASK";
export const GETTING_TASK = "GETTING_TASK";
export const ADD_TASK = "ADD_TASK"; 
export const ADDING_TASK = "ADDING_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const DELETING_TASK = "DELETING_TASK";
export const UPDATE_TASK = "UPDATE_TASK"; 
export const UPDATING_TASK = "UPDATING_TASK";

//  grade tasks

export const TOGGLE_TASK_DONE = "TOGGLE_TASK_DONE";  


// ACTION CREATORS 

//LOGIN ACTION CREATOR

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START }); 
    return axios
    .post('https://life-gpa-api.herokuapp.com/api/users/login', credentials)
    .then( res => { localStorage.setItem('token', res.data.payload); 
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload }); 
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
    dispatch({ type: GETTING_DATA }); 
    axios
    .get('')
}




// export const addTask = () => {

// }

// export const deleteTask = () => {

// } 

// export const updateTask = () => {

// }

// export const markDone = () => {

// }