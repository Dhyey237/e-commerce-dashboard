import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  )
}

export default App
