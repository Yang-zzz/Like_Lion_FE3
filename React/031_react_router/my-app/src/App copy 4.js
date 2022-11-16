import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

// Main - www.hojun.com
// ProductDetails - www.hojun.com/product/1
// Cart - www.hojun.com/cart
// Buy - www.hojun.com/buy

function Index(){
  return <h2>Index 페이지</h2>
}

function ProductDetails(){
  const location = useLocation();
  const path = location.pathname.split('/')[2]

  console.log(location)
  console.log(location.pathname.split('/')[2]);
  
  return <h2>ProductDetails {path} 페이지</h2>
}

function Cart(){
  return <h2>Cart 페이지</h2>
}

function Buy(){
  return <h2>Buy 페이지</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}