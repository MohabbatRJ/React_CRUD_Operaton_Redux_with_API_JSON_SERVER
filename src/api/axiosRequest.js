import axios from "axios"

export async function AxiosRequest(url, method, headers, params) {
    return params ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000
    }) :
        axios({
            url: url,
            method: method,
            headers: headers,
            data: {},
            timeout: 1000
        })
}

const GetApiData = () => {
    const apiUrl = "http://localhost:4000/userData";
    const apiMethod = "GET"
    const apiHeaders = {
        "Content-Type": "application/json",
    };
    return AxiosRequest(apiUrl, apiMethod, apiHeaders, {})
};

const PostApiData = (data) => {
    const apiUrl = "http://localhost:4000/userData";
    const apiMethod = "POST"
    const apiHeaders = {
        "Content-Type": "application/json",
    };
    return AxiosRequest(apiUrl, apiMethod, apiHeaders, data)
};

const GetApiDataById = (id) => {
    const apiUrl = 'http://localhost:4000/userData/' + id;
    const apiMethod = "GET"
    const apiHeaders = {
        "Content-Type": "application/json",
    };
    return AxiosRequest(apiUrl, apiMethod, apiHeaders, {})
};

const UpdateApiData = (data, id) => {
    const apiUrl = "http://localhost:4000/userData/" + id;

    const apiMethod = "PUT"
    const apiHeaders = {
        "Content-Type": "application/json",
    };
    // console.log("updateid",id)
    // console.log("updateapi",apiUrl)
    // console.log("update method",apiMethod)
    return AxiosRequest(apiUrl, apiMethod, apiHeaders, data)
};


const DeleteApiData = (id) => {
    const apiUrl = 'http://localhost:4000/userData/' + id;

    const apiMethod = "DELETE"
    const apiHeaders = {
        "Content-Type": "application/json",
    };
    // console.log("updateid",id)
    // console.log("updateapi",apiUrl)
    // console.log("update method",apiMethod)
    return AxiosRequest(apiUrl, apiMethod, apiHeaders, {}
    );
};

export { GetApiData, PostApiData, GetApiDataById, UpdateApiData, DeleteApiData };