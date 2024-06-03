import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct, getProducts } from '../redux/actions/productActions'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

const EditProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', category: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const products = useSelector((state) => state.products.products)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts())
    }
    const existingProduct = products.find((p) => p.id === parseInt(id))
    if (existingProduct) {
      setProduct(existingProduct)
    }
  }, [dispatch, id, products])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editProduct(id, product))
    navigate('/products')
  }

  return (
    <Container>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Fashion">Fashion</MenuItem>
            <MenuItem value="Home">Home</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" color="primary" variant="contained">
          Edit Product
        </Button>
      </form>
    </Container>
  )
}

export default EditProduct
