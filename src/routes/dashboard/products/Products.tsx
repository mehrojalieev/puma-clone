import "./Products.scss"
import useFetch from '../../../helpers/hooks/useFetch'
import { ProductTypes } from '../../../types'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Modal } from "../../../utils/Utils";
import { useState } from "react";
import ApiInstance from "../../../api";




const Products = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
      const {data} = useFetch("/product/all")

      const handleDeleteProduct = (id: string) => {
      async function deleteProduct(){
        try {
          const response = await  ApiInstance.delete(`/product/${id}`)
          console.log(response);
          
        } 
        catch (error) {
            console.log(error);
            
        }
      }
      deleteProduct()
      }
      
        
  return (
    <div className='product'>
        <div className="content__header">
            <h2>PRODUCTS</h2>
            <button onClick={() => {setIsOpenModal(true), console.log("Bosildi")}} className="add__product-btn">Add Product</button>
        </div>
       <div className="product__topnavigation-action">
       <form className="product__searchbar-form">
          <input type="text"  placeholder="Search products..."/>
          <button>Search</button>
        </form>
        <FormControl sx={{ m: 2, minWidth: 120 }}>
        <InputLabel  htmlFor="grouped-native-select">Cateogry</InputLabel>
        <Select className="choose__category-select" native defaultValue="" id="grouped-native-select" label="Category">
          <option aria-label="None" value="" />
            <option value="men">Men</option>
            <option value="women">Women</option>
        
        </Select>
      </FormControl>
       </div>
    <div className="table-wrapper">
    <TableContainer className='table' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="table__head-row">
            <TableCell className='table__head-title' align='left'>Product Name</TableCell>
            <TableCell className='table__head-title' align="center">Variants</TableCell>
            <TableCell className='table__head-title' align="center">Price</TableCell>
            <TableCell className='table__head-title' align="center">Picture</TableCell>
            <TableCell className='table__head-title' align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {data?.products?.map((product: ProductTypes)  => (
            <TableRow
            className="table-row"
              key={product._id  }
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.product_name}
              </TableCell >
              <TableCell className='table__product-item variants' align="center">{product.variants.map((variant) => <span>{variant.variant_value}</span>)}</TableCell>
              <TableCell className='table__product-item' align="center">$ {product.variants[0].variant_sale_price}</TableCell>
              <TableCell className='table__product-item' align="center"><img className='item-image' src={product.product_images[0]} alt={product.product_name} /></TableCell>
              <TableCell className='table__product-item product-action' align="center">
                  <button className="edit-btn">Edit</button>
                  <button onClick={() => handleDeleteProduct(product._id)} className="delete-btn">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  )
}

export default Products