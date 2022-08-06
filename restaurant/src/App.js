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

import { useLocalStorage } from './hooks/useLocalStorage';
import {  useState } from 'react';
import { AddFood } from './components/admin/add-food/AddFood';
import { EditFood } from './components/admin/edit-food/EditFood';
import {AllOrders} from './components/admin/all-orders/orders/AllOrders'
import { NotFound } from './components/not-found/NotFound';

import { GuestGuard } from './common/GuestGuard';
import {UserGuard} from './common/UserGuard'

function App() {

const [auth, setAuth] = useLocalStorage('auth', {})
const [admin, setAdmin] = useState(false)



const isAdmin = (user) => {
    if(!user){
      return setAdmin(false)
    }else{
      return setAdmin(user.isAdmin)
    }
}


const userLogin = (authData) => {
 return setAuth(authData)
}


const userLogout = () => {
  return setAuth({})
}


  return (
      <AuthContext.Provider value = {{user: auth, userLogin, userLogout, isAuthenticated: auth.accessToken }}>
      <AdminContext.Provider value = {{isAdmin, admin}}>

    <div className="App">
      <Navbar/>
    
      <Routes>
        <Route path = '/' element = {<Home/>}> </Route>
        <Route path='/menus' element = {<Menues/>}> </Route>

          <Route path = '/edit-food/:foodId' element = {(<GuestGuard><EditFood/></GuestGuard>)}/>
          <Route path = '/add-food' element = {(<GuestGuard><AddFood/></GuestGuard>)}/>
          <Route path = '/all-orders' element = {(<GuestGuard><AllOrders/></GuestGuard>)}/>
          <Route path = '/logout' element = {(<GuestGuard><Logout></Logout></GuestGuard>)}/>

        <Route path='/login' element = {(<UserGuard><Login/></UserGuard>)}> </Route>
        <Route path='/register' element = {(<UserGuard><Register/></UserGuard>)}> </Route>
        <Route path='/menus/:typeMenu/' element = {<MenuCatalog/>}> </Route>
        <Route path='/details/:foodId' element = {<Details/>}> </Route>
        <Route path='/shopping-cart' element = {<ShoppingCart/>}></Route>
        <Route path = '*' element = {<NotFound></NotFound>}></Route>
      </Routes>
   
      <Footer/>
    </div>
    </AdminContext.Provider>  
    </AuthContext.Provider>
  );
}

export default App;
