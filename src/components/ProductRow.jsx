import React from 'react'

function ProductRow(props) {
  // console.log("each", props);
  const { eachProdProp } = props;


  return (
    <tr>
        { eachProdProp.inStock === true ? <td>{eachProdProp.name}</td> : <td style={{color:"red"}}> {eachProdProp.name} </td> }
        <td>{eachProdProp.price}</td>
    </tr>
  )
}

export default ProductRow