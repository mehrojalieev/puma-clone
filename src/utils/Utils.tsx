import "./Utils.scss"
import React, {  useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const options = ['clothing', 'shoes', 'sneakers', 'jeans'];

const Modal = ({ isOpenModal, setIsOpenModal,openDeleteModal, setOpenDeleteModal }: any) => {
    // const [typeOutput, setTypeOutput] = React.useState('');
    const [value, setValue] = React.useState<string | null>("");
    const [inputValue, setInputValue] = React.useState('');
    const [productType, _] = useState<string>("")
    console.log(productType);


    // useEffect(() => {
    // //     if (isOpenModal) {
    // //         document.body.style.overflow = "hidden"
    // //     }
    // // }, [isOpenModal])


    return (
        <div   style={isOpenModal | openDeleteModal ? { display: "flex" } : { display: "none " }} className="modal-overlay">
            <div className="modal">
                <button onClick={() => setIsOpenModal(false)} className='close__modal-btn'><IoCloseSharp /></button>
                <h2 className='create__form-title'>CREATE PRODUCT</h2>
                <hr />
                <form className='create__product-form'>
                    <Box className='product__names' component="form" sx={{ '& .MuiTextField-root': { }, }} noValidate autoComplete="off" >
                            <TextField className='name-input' id="outlined-multiline-flexible" label="Product name" multiline maxRows={7} />
                            <TextField className='name-input' id="outlined-textarea" label="Category" multiline />
                    </Box>
                    <Autocomplete
                        value={value}
                        onChange={() => { setValue(""); }}
                        inputValue={inputValue}
                        onInputChange={(_, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        sx={{ width:"100%"  , marginTop: 2 }}
                        renderInput={(params) => <TextField {...params} label="Product type" />}
                    />
                    <textarea className='description' placeholder='Description'></textarea>
                    <div className="checkbox-action">
                        <div className="action-item">
                            <label htmlFor="">Featured</label>
                            <Checkbox className='checkbox' {...label} />
                        </div>
                        <div className="action-item">
                            <label htmlFor="">Visible in store</label>
                            <Checkbox className='checkbox' {...label} />
                        </div>
                    </div>
                        <hr />
                        <div className="variants-wrapper">
                            <h2>Variants</h2>
                            <button className='add__variant-btn' type='button'>Add new variant</button>
                        </div>
                    <button type='submit' className='add-btn'>Add product</button>
                </form>
            </div>

            <div className="delete-modal">
                <div className="delete-content">
                        <i><IoWarningOutline/></i>
                        <div className="text-info">
                            <h4>Delete Product</h4>
                            <p>Are you sure want to detele this product ?</p>
                        </div>
                </div>
                <div className="btn-action">
                    <button onClick={() =>setOpenDeleteModal(false)} className="cancel-btn">Cancel</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    )
}

export { Modal }