import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Menues } from './components/our-menues/AllMenues';
import { MenuCatalog } from './components/our-menues/MenuCatalog/MenuCatalog';
import { Home } from './components/Home';
import { Details } from './components/our-menues/Details/Details';
import { Register } from './components/Register';

import {Routes, Route} from 'react-router-dom'
import { Login } from './components/Login';
import { ShoppingCart } from './components/shopping-cart/ShoppingCart';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    
      <Routes>
        <Route path = '/' element = {<Home/>}> </Route>
        <Route path='/menus' element = {<Menues/>}> </Route>
        <Route path='/register' element = {<Register/>}> </Route>
        <Route path='/login' element = {<Login/>}> </Route>
        <Route path='/menus/:typeMenu/' element = {<MenuCatalog/>}> </Route>
       
        <Route path={`/details/:type/:id`} element = {<Details/>}> </Route>
        <Route path='/shopping-cart' element = {<ShoppingCart/>}></Route>
      </Routes>
   
      <Footer/>
    </div>
  );
}

export default App;
