import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListStudentComponent from "./components/ListStudentComponent";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';


function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent />       
            <div className="container">
              <Routes>
                <Route path='/' element={<ListStudentComponent />}></Route>
                <Route path='/students' element={<ListStudentComponent />}></Route>
                <Route path='/add' element={<CreateStudentComponent />}></Route>
              </Routes>
            </div>
              <FooterComponent />
            </div>
      </Router>   
    </div>
  );
}

export default App;
