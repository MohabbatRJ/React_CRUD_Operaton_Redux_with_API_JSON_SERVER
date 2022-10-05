import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
// import Home from './components/Home';
import ShowData from './components/ShowData';
import UpdateData from './components/UpdateData';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShowData />}/>
                <Route path="/adduser" element={<AddUser/>}/>
                <Route path="/updatedata/:id" element={<UpdateData/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
