import { useState } from 'react';
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login'


function App() {
  return (
  <>
  <h1>Hello world</h1>
  <BrowserRouter>
  <Routes>
   <Route path='/register' element={<Signup/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route element={<Home />} /> {/* This is the root path */}
  </Routes>
  </BrowserRouter>
  </>
  )
}
export default App;
