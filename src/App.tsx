import React from 'react'
import TableComponent from './components/TableComponent'
import UsersTable from './components/UsersTable'
import MoviesTable from './components/MoviesTable'
import MyTable from './components/MyTable'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Products from './components/Products'
import ContactUs from './components/ContactUs'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path='/' element={<Login />} />
<Route path='/home' element={<Home />} />
<Route path='/prod' element={<Products />} />
<Route path='/cont' element={<ContactUs />} />


</Routes>

</BrowserRouter>



    </div>
  )
}
