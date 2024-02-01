import "./ManageProducts.scss"
import { useState, useRef, useEffect } from "react";
import { Divider, Input, Select, Space, Button } from 'antd';
import Table from "../../../components/table/Table"
import useFetch from "../../../helpers/hooks/useFetch";
import { FiImage, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import type { InputRef } from 'antd';
import FormControl from '@mui/material/FormControl';
import { Modal } from "../../../utils/Utils";
import InputLabel from '@mui/material/InputLabel';
import ApiInstance from "../../../api";



const ManageProducts = () => {
  const [featured, setFeatured] = useState<boolean>(false);
  const [visibleInStore, setVisibleInStore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [productVariants, setProductVariants] = useState<any[]>([]);
  const productTypes = useFetch("/product/product-type");
  const [items, setItems] = useState<string[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("")
  const inputRef = useRef<InputRef>(null);
  const [productType, setProductType] = useState('');
  const [selectedProductType, setSelectedProductType] = useState<string>('');
  const [productFiles, setProductFiles] = useState<any[]>([]);
  const [productPreviewFiles, setProductPreviewFiles] = useState<string[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
      const {data} = useFetch("/product/all")


      const onProductTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setProductType(event.target.value.trim());
      };
      

      const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setItems(() => {
          if(items.includes(productType) || productTypes.data?.productTypes?.includes(productType)){
            return items
          }
          return [...items, productType]
        });
        setProductType('');
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }

 

      const handleAddNewVariant = () => {
        setProductVariants([...productVariants,  {
          variant_type: "",
          variant_value: "",
          variant_original_price: 0,
          variant_sale_price: 0
        }])
      }


      useEffect(() => {
      
        if(productFiles && productFiles?.length > 0){
            while(productPreviewFiles.length > 0){
              productPreviewFiles.pop();
            }
            for(let i = 0; i < productFiles.length; i++){
              if(productFiles[i].type === "video/mp4"){
                setProductPreviewFiles((productPreviewFiles) => [...productPreviewFiles, URL.createObjectURL(productFiles[i]) + "mp4"] )
              }
              else{
                setProductPreviewFiles((productPreviewFiles) => [...productPreviewFiles, URL.createObjectURL(productFiles[i])] )
              }
            }
            console.log(productFiles)
        }
        else{
          setProductPreviewFiles([]);
        }
    }, [productFiles]);


    const handleCreateNewProduct = (e: any) => {
      e.preventDefault();
      setLoading(true)
      const productData = new FormData();
      productData.append("product_name", productName )
      productData.append("description", productDescription )
      productData.append("category", productCategory )
      productData.append("variants", JSON.stringify(productVariants) );
      productData.append("visible_in_store", String(visibleInStore) );
      productData.append("featured", String(featured));
      productData.append("product_type", selectedProductType);
      
        if(productFiles){
          for (let i = 0; i < productFiles.length; i++) {
            productData.append("product_images", productFiles[i], productFiles[i].name);
          }
        }
       if(!loading){
          fetch("http://localhost:2000/api/product/create",{
            method: "POST",
            headers: {
              "Authorization": "Bearer " + sessionStorage.getItem("token")
            },
            body: productData
          })
            .then((response) => {
              if(response.status === 201){
                alert("Product created successfully")
                setIsModalOpen(false)
                setProductName("")
                setProductDescription("")
                setProductCategory("")
                setProductVariants([])
                setProductPreviewFiles([])
                setProductFiles([])
                setItems([])
                setSelectedProductType("")
                setProductType("")
              }
            })
            .catch((error) => {
              console.log(error)
            })
            .finally(() => setLoading(false))
        }
       }

       const onChange = (value: string) => {
        setSelectedProductType(value);
      };

    console.log(productPreviewFiles)

      
        
  return (
    <div className='product'>
        <div className="products__top-wrapper">
        <div className="content__header">
            <h2>MANAGE PRODUCTS</h2>
            <button onClick={() => setIsOpenModal(true)} className="add__product-btn">Add Product</button>
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
        </div>
    <Table type="product" data={data?.products}/>
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <form className="manage-product-form" onSubmit={handleCreateNewProduct}>
            <h2>Create new product</h2>
            <input required type="text" placeholder="Product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
            <Select
             onChange={onChange}
            style={{ width: 300 }}
            placeholder="Product Type"
            dropdownRender={(menu) => (
              <>
               {menu}
              <Divider style={{ margin: '8px 0' }} />
              <Space style={{ padding: '0 8px 4px' }}>
                <Input
                    placeholder="Please enter item"
                    ref={inputRef}
                    required
                    minLength={1}
                    value={productType}
                    onChange={onProductTypeChange}
                    onKeyDown={(e:any) => e.stopPropagation()}
                  />
                  <Button type="text" icon={<FiPlus />} onClick={addItem}>
                    Add item
                  </Button>
              </Space> 
              </>     
            )}
              options={productTypes.data?.productTypes?.concat(items).filter((i: string) => i !== "").map((item: string) => ({ label: item, value: item }))}
            />
            <input required type="text" placeholder="Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
            <input required type="text" placeholder="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
            <div className="product-visibility">
              <label>Featured <input onChange={(e) => setFeatured(e.target.checked)} type="checkbox"/></label>
              <label>Visible in store <input onChange={(e) => setVisibleInStore(e.target.checked)} type="checkbox"/></label>
            </div>
            <div className="divider"></div>
            <div className="product-form__vairants">
              <div className="variants-top">
                <h4>Variants</h4>
                <button onClick={handleAddNewVariant} type="button" className="link">Add new variant</button>
              </div>
                <div className="form-product-variants">
                  {
                    productVariants.map((pruductVariant, variantIndex) => 
                      <div className="variant-wrapper" key={variantIndex}>
                        {
                          Object.keys(pruductVariant).map((item, index) => 
                            <input onChange={(e) => {
                              productVariants[variantIndex][item] = e.target.value;
                              setProductVariants([...productVariants])
                            }} required key={index} type="text" placeholder={item.split("_").join(" ")[0].toUpperCase() + item.split("_").join(" ").slice(1)}/>  
                          )
                        }
                        <button className="link" type="button" onClick={() => setProductVariants(productVariants.filter((variant, i) => i !== variantIndex))}><FiTrash2/></button>
                      </div>  
                    )
                  }
                </div>
            </div>
            <div className="product-image-select">
                <div className="product-image-select__wrapper">
                <div className="image-select">
                      <input required onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if(e.target.files && e.target.files?.length > 5 ){
                          alert("Max files count is 5")
                        }
                        setProductFiles([...productFiles, ...e.target.files].slice(0, 5))
                      }} accept=".mp4,.mov,.png,.jpg,.webp" type="file" multiple />
                      <p className="image-select__text"><FiImage/> Add new image</p>
                </div>
                  {
                    productPreviewFiles.map((img, index) => <div key={index} className="preview-image">
                      <FiX onClick={() => setProductFiles(productFiles.filter((file, i) => i !== index))}/>
                      {
                        img.endsWith("mp4") && img.startsWith("blob") ?
                        <video width={50} height={50} src={img.replace("mp4", "")} autoPlay muted></video>
                        :
                        img.endsWith("mp4") ? <video width={50} height={50} src={img} autoPlay muted></video> :
                        <img  width={50} height={50} src={img}/>
                      }
                    </div>)
                  }
                </div>
            </div>
            <button disabled={loading} className="link" type="submit">Create product {loading ? "..." : ""}</button>
          </form>
        </Modal>
      
    </div>
  )
}

export default ManageProducts