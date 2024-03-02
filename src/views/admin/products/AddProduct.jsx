 import { STATUSES } from "globals/misc/statuses"
 import { useForm } from "react-hook-form"
 import { useDispatch, useSelector } from "react-redux"
 import { useNavigate } from "react-router-dom"
 import { addProduct } from "store/productsSlice"

const AddProduct = () => {
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const {status} = useSelector((state)=>state.products)
     const {register,handleSubmit,formState} = useForm()
     const handleProduct = (data) =>{
         data = {...data,productImage : data.productImage[0]}
         console.log(data)
        dispatch(addProduct(data))
        if(status == STATUSES.SUCCESS){
          navigate("/admin/products")
        }
     }

return(
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form  onSubmit={handleSubmit((data)=>{
    handleProduct(data)  })} noValidate >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input type="text" name="productName" id="productName" className="w-full  pl-12 bg-gray-200 md:py-2 focus:outline-none" placeholder="productName" {...register("productName",{required : "productName is required"})} />
                  <p>{formState.errors.productName && formState.errors.productName.message}</p>
              </div> 
        
              <div className="w-full">
                  <label htmlFor="productBrand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <select id="productBrand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" {...register("productBrand",{required : "productBrand is required"})}  >
            
                      {/* <option selected="">Select brand</option> */}
                      <option value="Vivo">Vivo</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Dell">Dell</option>
                      <option value="HP">Hp</option>
                      <option value ="Canon">Canon</option>
                      <option value="Nikon">Nikon</option>
                      <option value="Mercedes">Mercedes</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>
                      <option value="Hero">Hero</option>
                  </select>
                  <p>{formState.errors.productBrand && formState.errors.productBrand.message}</p>
              </div>
              <div className="w-full">
                  <label htmlFor="productPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="productPrice" id="productPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rs." required="" {...register("productPrice",{required : "productPrice is required"})} />
                  <p>{formState.errors.productPrice && formState.errors.productPrice.message}</p>

              </div>
              <div>
                  <label htmlFor="productCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="productCategory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" {...register("productCategory", {required : "productCategory is required"})}>
                      {/* <option selected="">Select category</option> */}
                      <option value="Mobile">Mobile</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Camera">Camera</option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                  </select>
                  <p>{formState.errors.productCategory && formState.errors.productCategory.message}</p>
              </div>
              <div>
                  <label htmlFor="productStockQty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Quantity</label>
                  <input type="number" name="productStockQty" id="productStockQty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required="" {...register("productStockQty",{required : "productQty is required"})} />
                  <p>{formState.errors.productStockQty && formState.errors.productStockQty.message}</p>
              </div> 
              <div className="sm:col-span-2">
                  <label htmlFor="ProductDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="productDescription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" {...register("productDescription",{required : "productDescription is required"})} > </textarea>
              </div>
              <div className="sm:col-span-2">
              <label htmlFor="ProductImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
             <input type="file" name="productImage" id="productImage" className="w-auto  pl-12 bg-gray-200 md:py-2 focus:outline-none" placeholder="productImage" {...register("productImage",{required : "productImage is required"})} />
             <p>{formState.errors.productImage && formState.errors.productImage.message}</p>
      
           </div>
           <div className="sm:col-span-2">
            <label htmlFor="productStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select product Status</label>
             <select id="productStatus" className="bg-gray-50 bproduct bproduct-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:bproduct-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:bproduct-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bproduct-blue-500" {...register("productStatus",{required : "productStatus is required"})}  >
            
             {/* <option value={filteredproduct?.productStatus}>{filteredproduct?.productStatus}</option> */}
             <option value="available">available</option>
             <option value="unavailable">unavailable</option>
      
             </select>
             <p>{formState.errors.productStatus && formState.errors.productStatus.message}</p>
            </div>
         
          </div>
           <button className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white uppercase bg-gradient-to-b from-gray-700 to-gray-900 md:p-4 hover:bg-primary-800">
              Add product
          </button>
      </form>
  </div>
</section>
  
) 
}

export default AddProduct