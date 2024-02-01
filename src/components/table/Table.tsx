import { ProductTypes, UserTypes } from "../../types"
import "./Table.scss"
import UserTr from "./user-tr/UserTr"
import ProductTr from "./product-tr/ProductTr"

const Table = ({data, type}: {data: ProductTypes[] | UserTypes[], type: "user" | "product" | "liked"}) => {
  return (
    <div>
          <table className="dashboard-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>{type === "user" ? "Email" : "Variant"} </th>
          <th>{type === "user" ? "Role" : "Type"}</th> 
          {type !== "user" && <th>Likes</th>}
          <th>Image</th>
          {type !== "liked" && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          if(type === "product" || type === "liked"){
            return <ProductTr product={item as ProductTypes} type={type} key={index} />
          }
          else{
            return <UserTr user={item as UserTypes} key={index} />
          }
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
    </div>
  )
}

export default Table