import React , {useState , useEffect}  from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProductTypes from './ProductTypes/ProductTypes'
import Loginpage from './Login/Loginpage'
import SignUp from './SignUp/SignUp'
import Checkbox from './Cart/Checkbox'
import PhonesData from './Cart/PhonesData'
import { CartProvider } from "./CartContext";
import DotLoader from "react-spinners/DotLoader";
import './App.css'
const App = () => {
  const [loading,setLoading] =useState([false]);
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  } , 3000)
} ,[])

  return (
    <CartProvider>
    <BrowserRouter>
    {loading ? 
    <div className="loader">
    <DotLoader color={'#eec662'}  size={90} speedMultiplier={1} />
    </div>:
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Loginpage/>}/>
      <Route path='/MobilePhones' element={<ProductTypes/>}/>
      <Route path='/signin' element={<Loginpage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Checkbox' element={<Checkbox/>}/>
      <Route path='/phones' element={<PhonesData/>}/>
    </Routes>
    }
    </BrowserRouter>
    </CartProvider>
  )
}

export default App