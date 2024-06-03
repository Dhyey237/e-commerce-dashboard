import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/actions/productActions'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', category: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(product))
    navigate('/products')
  }

  return (
    <Container>
      <h2>Add Product</h2>
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
          Add Product
        </Button>
      </form>
    </Container>
  )
}

export default AddProduct
