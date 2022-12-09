import React from 'react'

const ProductRow = ({product}) => {
  return (
    <tr>
        <td>{product.title}</td>
        <td>{product.category}</td>
    </tr>
  )
}

export default ProductRow