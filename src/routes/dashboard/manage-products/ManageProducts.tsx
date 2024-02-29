import { useState, useRef, useEffect } from "react";
import { Divider, Input, Select, Space, Button } from 'antd';
import {Modal} from "../../../utils/Utils";
import Table from "../../../components/table/Table"
import useFetch from "../../../helpers/hooks/useFetch";
import { FiImage, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import type { InputRef } from 'antd';
import "./ManageProducts.scss"
import { ProductTypes } from "../../../types";
import { imageUrlsToFileObjects } from "../../../helpers/modifier/convert-blob";

const ManageProducts = () => {
  const [featured, setFeatured] = useState<boolean>(false);
  const [visibleInStore, setVisibleInStore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [productVariants, setProductVariants] = useState<any[]>([]);
  const productTypes: any = useFetch("/product/product-type");
  const [items, setItems] = useState<string[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("")
  const inputRef = useRef<InputRef>(null);
  const [productType, setProductType] = useState('');
  const [selectedProductType, setSelectedProductType] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [productFiles, setProductFiles] = useState<any[]>([]);
  const [productPreviewFiles, setProductPreviewFiles] = useState<string[]>([]);
  const [editProduct, setEditProduct] = useState<ProductTypes | null>(null)
  const {data} = useFetch("/product/all") as ProductTypes | any;
  const onProductTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setProductType(event.target.value.trim());
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();

    setProductType('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  const handleAddNewVariant = () => {
    setProductVariants([...productVariants,  {
      variant_type: "",
      variant_value: "",
      variant_original_price: "",
      variant_sale_price: ""
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
        fetch(`http://localhost:2000/api/product/${editProduct ? "update" : "create"}${editProduct ? `/${editProduct?._id}` : ""}`,{
          method: editProduct ? "PUT" : "POST",
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTM3NjY5MzQsInVzZXIiOnsiZW1haWwiOiJpai5pYnJva2hpbS5qYWxhbG92QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsIl9pZCI6IjY1YWY1NzEwZjQ1OWJiZDRmZGY3NmI0YSJ9LCJpYXQiOjE3MDU5OTA5MzR9.hOaZs_9kzystRGMNO8Fe_zChLdmP-Zthx176Nk6XnPM"
          },
          body: productData
        })
          .then((response) => {
            if(response.status === 201 || response.status === 204){
              alert(`Product ${response.status === 204 ? "edited" : "created"} successfully`)
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

    useEffect(() => {
      if(editProduct !== null){
          setProductName(editProduct.product_name)
          setSelectedProductType(editProduct.product_type)
          setProductCategory(editProduct.category);
          setProductDescription(editProduct.description);
          setFeatured(editProduct.featured);
          setVisibleInStore(editProduct.visible_in_store);
          setProductVariants(editProduct.variants);
          imageUrlsToFileObjects(editProduct.product_images, (error:any, fileObjects: any[]) => {
            if (error) {
              console.error(error);
            } else {
              setProductFiles([...fileObjects])
            }
          })
          setIsModalOpen(true);
      }
    }, [editProduct])

    useEffect(() => {
      if(!isModalOpen){
        setEditProduct(null);
        setProductName("");
        setProductCategory("")
        setProductFiles([]);
        setProductDescription("")
        setProductVariants([])
        setProductType("")
        setProductPreviewFiles([])
        setFeatured(false);
        setVisibleInStore(false)
      }
    }, [isModalOpen])

  
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h2>Manage Products</h2>
        <button onClick={() => setIsModalOpen(true)} className="link">Add new product</button>
      </div>
      <div className="dashboard-info">
        <Table editProduct={editProduct} setEditProduct={setEditProduct} type="product" data={data?.products}/>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <form className="manage-product-form" onSubmit={handleCreateNewProduct}>
            <h2>{ editProduct ? "Edit this product" : "Create new product" }</h2>
            <input required type="text" placeholder="Product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
            <Select
              onChange={onChange}
              style={{ width: 300 }}
              value={selectedProductType}
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
              <label>Featured <input checked={featured} onChange={(e) => setFeatured(e.target.checked)} type="checkbox"/></label>
              <label>Visible in store <input checked={visibleInStore} onChange={(e) => setVisibleInStore(e.target.checked)} type="checkbox"/></label>
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
                            <input value={productVariants[variantIndex][item]} onChange={(e) => {
                              productVariants[variantIndex][item] = e.target.value;
                              setProductVariants([...productVariants])
                            }} required key={index} type="text" placeholder={item.split("_").join(" ")[0].toUpperCase() + item.split("_").join(" ").slice(1)}/>  
                          )
                        }
                        <button className="link" type="button" onClick={() => setProductVariants(productVariants.filter((_, i) => i !== variantIndex))}><FiTrash2/></button>
                      </div>  
                    )
                  }
                </div>
            </div>
            <div className="product-image-select">
                <div className="product-image-select__wrapper">
                <div className="image-select">
                      <input onChange={(e: any) => {
                        if(e.target.files && e.target.files?.length > 5 ){
                          alert("Max files count is 5")
                        }
                        setProductFiles([...productFiles, ...e.target.files].slice(0, 5))
                      }} accept=".mp4,.mov,.png,.jpg,.webp" type="file" multiple />
                      <p className="image-select__text"><FiImage/> Add new image</p>
                </div>
                  {
                    productPreviewFiles.map((img, index) => <div key={index} className="preview-image">
                      <FiX onClick={() => setProductFiles(productFiles.filter((_, i) => i !== index))}/>
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
            <button disabled={loading} className="link" type="submit"> {editProduct ? "Save product" : "Create a new product"} {loading ? "..." : ""}</button>
          </form>
        </Modal>
      </div>
    </div>
  )
}

export default ManageProducts