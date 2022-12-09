import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({productList}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name:</th>
                <th>Category:</th>
            </tr>
        </thead>
        <tbody>
            {
                productList.map((product) => <ProductRow product={product} key={product.id} />)
            }
        </tbody>
    </table>
  )
}

export default ProductTable