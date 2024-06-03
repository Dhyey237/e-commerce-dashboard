import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ProductList from './ProductList'

const mockStore = configureStore([])

describe('ProductList', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [],
      },
    })
  })

  test('renders ProductList component', () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>,
    )
    expect(screen.getByText(/Product List/i)).toBeInTheDocument()
  })
})
