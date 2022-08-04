import './App.css';
import {AuthContext} from './contexts/AuthContext'
import { AdminContext } from './contexts/AdminContext';

import { Home } from './components/Home';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Menues } from './components/our-menues/AllMenues';
import { MenuCatalog } from './components/our-menues/MenuCatalog/MenuCatalog';
import { Details } from './components/our-menues/Details/Details';
import { ShoppingCart } from './components/shopping-cart/ShoppingCart';

import { Register } from './components/register/Register';
import { Login } from './components/Login';
import { Logout } from './components/logout/Logout';

import {Routes, Route} from 'react-router-dom'

import * as authService from './services/authService'
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLocalStorage } from './hooks/useLocalStorage';
import {  useState } from 'react';
import { AddFood } from './components/admin/add-food/AddFood';
import { EditFood } from './components/admin/edit-food/EditFood';
import { FoodContext } from './contexts/FoodContext';

function App() {

const [auth, setAuth] = useLocalStorage('auth', {})
const [admin, setAdmin] = useState(false)


const isAdmin = (user) => {

    if(!user){
      return setAdmin(false)
    }else{
      return setAdmin(user.isAdmin)
    }

  
 
  // return setAdmin(user.isAdmin)
}



const userLogin = (authData) => {
 return setAuth(authData)
}


const userLogout = () => {
  return setAuth({})
}

const editFoodHandler = () => {
  
}
  return (
      <AuthContext.Provider value = {{user: auth, userLogin, userLogout}}>
      <AdminContext.Provider value = {{isAdmin, admin}}>
      <FoodContext.Provider value = {editFoodHandler}>
    <div className="App">
      <Navbar/>
    
      <Routes>
        <Route path = '/' element = {<Home/>}> </Route>
        <Route path='/menus' element = {<Menues/>}> </Route>
        <Route path='/register' element = {<Register/>}> </Route>
        <Route path='/login' element = {<Login/>}> </Route>
        <Route path='/menus/:typeMenu/' element = {<MenuCatalog/>}> </Route>
        <Route path = '/logout' element = {<Logout></Logout>}></Route>
        <Route path='/details/:foodId' element = {<Details/>}> </Route>
        <Route path='/shopping-cart' element = {<ShoppingCart/>}></Route>
        <Route path = '/add-food' element = {<AddFood></AddFood>}></Route>
        <Route path = '/edit-food/:foodId' element = {<EditFood></EditFood>}></Route>
      </Routes>
   
      <Footer/>
    </div>
    </FoodContext.Provider>
    </AdminContext.Provider>  
    </AuthContext.Provider>
  );
}

export default App;
