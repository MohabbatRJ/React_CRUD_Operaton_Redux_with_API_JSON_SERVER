import { DELETE_USER_DATA, GET_USER_DATA, POST_USER_DATA, UPDATE_USER_DATA } from "../constant/actionTypes";

const initialState = {
    userData: [],
    dataById: [],
    isResponse: false,
    isUpdateResponse: false,
    isDeleteResponse: false,
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            // console.log("Get Reducer called")
            return{
                userData: action.payload,
            }
        case POST_USER_DATA:
            // console.log("Post Reducer called",action.payload)
            return{
                isResponse: action.payload
            }
        case UPDATE_USER_DATA:
            // console.log("Update Reducer called",action.payload)
            return{
                isUpdateResponse: action.payload
            }
        case DELETE_USER_DATA:
            // console.log("Delete Reducer called",action.payload)
            return{
                isDeleteResponse: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;