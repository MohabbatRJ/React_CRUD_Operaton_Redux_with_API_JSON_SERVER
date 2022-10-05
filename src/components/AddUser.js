import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { actionPostData } from '../redux/actions/action'

const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isResponse = useSelector((state) => state.Reducer.isResponse)
    // console.log(isResponse);
    if(isResponse){
        alert("Data Submitted Successfully");
        
    }

    const nameHandle = (e) =>{
        setName(e.target.value)
    }
    const emailHandle = (e) =>{
        setEmail(e.target.value)
    }
    const phoneHandle = (e) =>{
        setPhone(e.target.value)
    }
    const cityHandle = (e) =>{
        setCity(e.target.value)
    }

    const addHandler = (e) => {
        e.preventDefault()

        const allData={
            name:name,
            email:email,
            phone:phone,
            city:city
        }
        dispatch(actionPostData(allData));
        navigate('/')
    }

    
    return (
        <>
        <div className='container my-5 '>
        <Link to="/" type="submit" className="btn btn-primary mt-3 fw-bold">Back
            </Link>
            
        <h1 className="text-center fw-bold mt-5">Add User</h1>
            <form>
                <div className="form-row d-flex justify-content-center flex-column  align-items-center">
                <div className="form-group col-md-6">
                        <label htmlFor="name" className='mb-2'>Name</label>
                        <input type="text" className="form-control mb-3" id="name" placeholder="Namesless"
                        onChange={(e) =>nameHandle(e)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email" className='mb-2'>Email</label>
                        <input type="email" className="form-control mb-3" id="email" placeholder="email@email.com" onChange={(e) =>emailHandle(e)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone" className='mb-2'>Phone</label>
                        <input type="number"
                        className="form-control mb-3" id="phone" placeholder="03000000000" onChange={(e) =>phoneHandle(e)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="city" className='mb-2'>City</label>
                        <input type="text"
                        className="form-control mb-3" id="city" placeholder="Multan" onChange={(e) =>cityHandle(e)} />
                    </div>
                    
                <button type="submit" className="btn btn-primary mt-3 fw-bold w-25" onClick={(e)=>{addHandler(e)}}>Add</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default AddUser
