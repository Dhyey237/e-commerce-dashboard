import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          E-commerce Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/products">
          Product List
        </Button>
        <Button color="inherit" component={Link} to="/add-product">
          Add Product
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
