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




const Products = () => {
    const data = useFetch("/product/all")
  
  return (
    <div className='product'>
        <div className="content__header">
            <h2>PRODUCTS</h2>
        </div>
    <div className="table-wrapper">
    <TableContainer className='table' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='table__head-title' align='left'>Product Name</TableCell>
            <TableCell className='table__head-title' align="center">Variants</TableCell>
            <TableCell className='table__head-title' align="center">Price</TableCell>
            <TableCell className='table__head-title' align="center">Picture</TableCell>
            <TableCell className='table__head-title' align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.products?.map((product: ProductTypes) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.product_name}
              </TableCell>
              <TableCell className='table__product-item variants' align="center">{product.variants.map((variant) => <span>{variant.variant_value}</span>)}</TableCell>
              <TableCell className='table__product-item' align="center">$ {product.variants[0].variant_sale_price}</TableCell>
              <TableCell className='table__product-item' align="center"><img className='item-image' src={product.product_images[0]} alt={product.product_name} /></TableCell>
              <TableCell className='table__product-item' align="center"><button className='more__info-btn'>More Info</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  )
}

export default Products