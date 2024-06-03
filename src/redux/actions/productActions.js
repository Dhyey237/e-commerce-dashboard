import api from '../../api/api'

export const getProducts = () => async (dispatch) => {
  const response = await api.get('/products')
  dispatch({ type: 'GET_PRODUCTS', payload: response.data })
}

export const addProduct = (product) => async (dispatch) => {
  const response = await api.post('/products', product)
  dispatch({ type: 'ADD_PRODUCT', payload: response.data })
}

export const editProduct = (id, product) => async (dispatch) => {
  const response = await api.put(`/products/${id}`, product)
  dispatch({ type: 'EDIT_PRODUCT', payload: response.data })
}

export const deleteProduct = (id) => async (dispatch) => {
  await api.delete(`/products/${id}`)
  dispatch({ type: 'DELETE_PRODUCT', payload: id })
}
