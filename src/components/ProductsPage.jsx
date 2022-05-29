import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import allProductsJson from "../data.json";



function ProductsPage() {

    const [ products, setProducts ] = useState(allProductsJson);
    // console.log(products);

    return (
    <div>
        <h1> IronStore </h1>

        <SearchBar />
        <ProductTable productsProp={products} />

    </div>
  )
}

export default ProductsPage