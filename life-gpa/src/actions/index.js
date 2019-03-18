// import axios from 'axios';


// login 

export const LOG_IN = "LOG_IN";
export const LOGIN_START = "LOGIN_START";
export const LOG_OUT = "LOG_OUT"; 

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


export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START }) 
} 

// export const addTask = () => {

// }

// export const deleteTask = () => {

// } 

// export const updateTask = () => {

// }

// export const markDone = () => {

// }