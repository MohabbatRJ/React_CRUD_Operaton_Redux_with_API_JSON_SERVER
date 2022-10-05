import React, { useEffect } from 'react'
import {actionGetData, actionDeleteData } from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

export default function ShowData() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const responseData = useSelector((state) => state.Reducer.userData)
    // console.log("show data",responseData);

    const isDeleteResponse = useSelector((state) => state.Reducer.isDeleteResponse)
    console.log("Delete data",isDeleteResponse);
    if(isDeleteResponse){
        alert("Data Delete");
        window.location.reload(false);
    }
    useEffect(() => {
        dispatch(actionGetData())
    }, [dispatch]);

    


    const userDataResult = responseData? responseData.map((data, index) => {
        return (
            <tr key={index}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.city}</td>
                <td>
                    <button type="button" name="" id="" className="btn btn-dark mx-1 my-1 btn-md btn-block" onClick={()=>dispatch(actionDeleteData(data.id))}>
                        ❌
                    </button>
                    <button type="button" name="" id="" className="btn btn-dark mx-1 btn-md btn-block">
                        <Link to={`/updatedata/${data.id}`}>
                        🖋️
                        </Link>
                    </button>
                </td>
            </tr>
        );
    }):null

    

    return (
        <>

            <div className='container-fluid'>
            <Link to="/adduser" type="submit" className="btn btn-primary mt-3 fw-bold">Add User
            </Link>
            <h1 className="text-center fw-bold mt-5">Users</h1>
                <table className="table table-bordered table-hover text-center">
                    <thead className="bg-dark text-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDataResult}
                    </tbody>
                </table>
            </div>
        </>
    )
}
