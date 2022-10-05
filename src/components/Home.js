import React from 'react'
import AddUser from './AddUser'
import ShowData from './ShowData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UpdateData from './UpdateData'

const Home = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ShowData />}/>
                <Route path="/adduser" element={<AddUser/>}/>
                <Route path="/updatedata/:id" element={<UpdateData/>}/>
            </Routes>
        </Router>
    )
}

export default Home
