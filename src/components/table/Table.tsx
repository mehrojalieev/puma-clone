import { ProductTypes, UserTypes } from "../../types";
import "./Table.scss";
import ProductTr from "./product-tr/ProductTr";
import UserTr from "./user-tr/UserTr";

const Table = ({ data, type, setEditProduct }: { data: ProductTypes[] | UserTypes[] , type: "user" | "product" | "liked" , editProduct: ProductTypes | null, setEditProduct:  React.Dispatch<React.SetStateAction<ProductTypes | null>>}) => {
  return (
    <div className="table-wrapper">
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
        {data?.map((item: any, index: number) => {
          if(type === "product" || type === "liked"){
            return <ProductTr setEditProduct={setEditProduct}  product={item as ProductTypes} type={type} key={index} />
          }
          else{
            return <UserTr user={item as UserTypes} key={index} />
          }
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
    </div>
  );
};

export default Table;
