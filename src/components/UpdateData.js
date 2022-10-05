import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { actionUpdateData } from '../redux/actions/action'
import { useParams } from 'react-router-dom'
import getDataByHooks from '../hooks/getDataByHooks'

const UpdateData = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")

    const isUpdateResponse = useSelector((state) => state.Reducer.isUpdateResponse)
    console.log("updatedata", isUpdateResponse);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { id } = useParams();
    // console.log("params", id);

    const [dataById] = getDataByHooks(id);
    // console.log("databyid", dataById);

    if (isUpdateResponse) {
        alert("Data Update Successfully");
    }

    useEffect(() => {
        const data = () => {
            if (dataById.data) {
                setName(dataById.data.name)
                setEmail(dataById.data.email)
                setPhone(dataById.data.phone)
                setCity(dataById.data.city)
            }
        };
        data();

    },[dataById.data])

    

    const nameHandle = (e) => {
        setName(e.target.value)
    }
    const emailHandle = (e) => {
        setEmail(e.target.value)
    }
    const phoneHandle = (e) => {
        setPhone(e.target.value)
    }
    const cityHandle = (e) => {
        setCity(e.target.value)
    }

    const updateHandler = (e) => {
        e.preventDefault()
        const allData = {
            name: name,
            email: email,
            phone: phone,
            city: city
        }
        // navigate('/')
        dispatch(actionUpdateData(allData, id))
    }

    if (isUpdateResponse) {
        alert("Data Update Successfully");
    }

    return (
        <>
            <div className='container my-5 '>
                <Link to="/" type="submit" className="btn btn-primary mt-3 fw-bold">Back
                </Link>

                <h1 className="text-center fw-bold mt-5">Update User</h1>
                <form>
                    <div className="form-row d-flex justify-content-center flex-column  align-items-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="name" className='mb-2'>Name</label>
                            <input type="text" className="form-control mb-3" id="name" placeholder="Namesless" defaultValue={name}
                                onChange={(e) => nameHandle(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email" className='mb-2'>Email</label>
                            <input type="email" className="form-control mb-3" id="email" placeholder="email@email.com" defaultValue={email} onChange={(e) => emailHandle(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="phone" className='mb-2'>Phone</label>
                            <input type="number"
                                className="form-control mb-3" id="phone" placeholder="03000000000" defaultValue={phone} onChange={(e) => phoneHandle(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="city" className='mb-2'>City</label>
                            <input type="text"
                                className="form-control mb-3" id="city" placeholder="Multan" defaultValue={city} onChange={(e) => cityHandle(e)} />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3 fw-bold w-25" onClick={(e) => { updateHandler(e) }}>Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateData
