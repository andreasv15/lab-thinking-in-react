import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
    const { productsProp } = props;
    //console.log(productsProp);


  return (
    <div>
    <table>
        <tr>
            <th> Name </th>
            <th> Price </th>
        </tr>
        {
          productsProp.map((eachProduct) => {
            {/* console.log(eachProduct); */}
            return <ProductRow eachProdProp={eachProduct} />
          })
        }

    </table>
    </div>
  )
}

export default ProductTable