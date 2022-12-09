import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchForm from './SearchForm'

const productList = [
  {
    title: 'Football',
    id: 10,
    isStock: false,
    category: 'sport'
  },
  {
    title: 'Shoes',
    id: 11,
    isStock: false,
    category: 'dress'
  },
  {
    title: 'Keyboard',
    id: 12,
    isStock: true,
    category: 'accessory'
  },
  {
    title: 'Laptop',
    id: 13,
    isStock: true,
    category: 'Work'
  },
  {
    title: 'Head phone',
    id: 14,
    isStock: false,
    category: 'accessory'
  },
  {
    title: 'Book',
    id: 15,
    isStock: true,
    category: 'Object'
  }
] 


const App = () => {
  const [filteredProducts, setFilteredProducts]  = useState(productList);

  function filterProducts(input) {
      const filtered = productList.filter(productList => productList.title.startsWith(input) );
      setFilteredProducts(filtered);
  }

  return (
    <div>
        <SearchForm filterProducts={filterProducts} />
        <ProductTable productList={filteredProducts} />
    </div>
  )
}

export default App