import { ProductTypes } from '../../../types'
import ApiInstance from '../../../api'
import { AxiosResponse } from 'axios'

const ProductTr = ({product, type}: {product: ProductTypes, type: "product" | "liked"}) => {
    const handleProductDelete = () => {
        ApiInstance.delete(`/product/${product._id}`)
        .then((response: AxiosResponse) => console.log(response.data))
    }
  return (
    <tr>
      <td>{product.product_name}</td>
      <td>
        {product.variants.map((variant, index) => (
          <span key={index}>{variant.variant_value}</span>
        ))}
      </td>
      <td>{product.product_type}</td>
      <td>{product.likes}</td>
      <td>
        <img width={50} height={50} src={product.product_images[0]} alt="" />
      </td>
      {type === "product" && <td>
        <div className="table-action__wrapper">
          <button className="btn btn-warning">Edit</button>
          <button onClick={handleProductDelete} className="btn btn-danger">Delete</button>
        </div>
      </td>}
    </tr>
  )
}

export default ProductTr