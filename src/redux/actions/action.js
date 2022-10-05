import { DELETE_USER_DATA, GET_USER_DATA, POST_USER_DATA, UPDATE_USER_DATA } from '../constant/actionTypes'
import {GetApiData, PostApiData, UpdateApiData, DeleteApiData}from '../../api/axiosRequest'

const actionGetData = () => {
    // console.log('Get action Called....')
    // return {
    //     type: GET_USER_DATA,
    //     payload: ''
    // }

    return function (dispatch) {
        return GetApiData().then((response) => {
            // console.log("Get Response Data....", response);
            dispatch({
                type: GET_USER_DATA,
                payload: response.data,
            });
        });
    };
};

const actionPostData = (request) => {
    // console.log('Post action Called....')

    return function (dispatch) {
        dispatch({
            type: POST_USER_DATA,
            payload: false,
        });
        return PostApiData(request).then((response) => {
            // console.log("Post Response Data....", response);
            dispatch({
                type: POST_USER_DATA,
                payload: true,
            });
        });
    };
};

const actionUpdateData = (request, id) => {
    // console.log('Update action Called....')

    return function (dispatch) {
        dispatch({
            type: UPDATE_USER_DATA,
            payload: false,
        });
        return UpdateApiData(request, id).then((response) => {
            // console.log("Update Response Data....", response.data);

            dispatch({
                type: UPDATE_USER_DATA,
                payload: true,
            });
            
        });
    };
};


const actionDeleteData = (id) => {
    // console.log('Delete action Called....')

    return function (dispatch) {
        dispatch({
            type: DELETE_USER_DATA,
            payload: false,
        });
        return DeleteApiData(id).then((response) => {
            // console.log("Delete Response Data....", response.data);

            dispatch({
                type: DELETE_USER_DATA,
                payload: true,
            });
        });
    };
};
export {actionGetData, actionPostData, actionUpdateData, actionDeleteData};