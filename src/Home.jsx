import React from 'react'
import Baner from './BanerCrousel/Baner'
import Product1 from './Product/ProductData1'
import Product2 from './Product/ProductData2'
import Product3 from './Product/ProductData3'
import Product4 from './Product/ProductData4'
import Footer from './Footer/Footer'
import Footer2 from './Footer/Footer2'
import ProductSlider1 from './ProductSlider/ProductSlider1'
import ProductSlider2 from './ProductSlider/ProductSlider2'
import ProductSlider3 from './ProductSlider/ProductSlider3'
import ProductSlider4 from './ProductSlider/ProductSlider4'
import ProductSlider5 from './ProductSlider/ProductSlider5'
import ProductSlider6 from './ProductSlider/ProductSlider6'
import ProductSlider7 from './ProductSlider/ProductSlider7'
import ProductSlider8 from './ProductSlider/ProductSlider8'
import Navbar2 from './NavbarAndHeader/Navbar2'
import Header from './NavbarAndHeader/Header'
import Navbar from './NavbarAndHeader/Navbar'
import './App.css'
const HOME = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Navbar2 />
    <Baner />
    <Product1 />
    <Product2 />
    <ProductSlider1/>
    <ProductSlider2 />
    <ProductSlider3 />
    <Product3 />
    <ProductSlider4 />
    <ProductSlider5 />
    <Product4 />
    <ProductSlider6 />
    <ProductSlider7 />
    <ProductSlider1/>
    <ProductSlider8 /> 
    <Footer />
    <Footer2 />
    </>
  )
}
export default HOME;