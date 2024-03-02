import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { approveProductById } from 'store/rentSlice'
import { fetchRent } from 'store/rentSlice'
//import { fetchRent } from '../../../store/rentSlice'


const Myproducts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {rents} = useSelector((state)=>state.rent)
    console.log(rents)
    useEffect(()=>{
        
        dispatch(fetchRent())
    },[])
    const approveProduct =  (orderId) =>{
  
        dispatch(approveProductById)
    }

  return (
  
<div className="antialiased font-sans bg-gray-200 pt-20">
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-semibold leading-tight">products</h2>
            </div>
      
            
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Id
                                </th>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    UserId
                                </th>
                     
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Product Name
                                </th>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Brand
                                </th>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Category
                                </th>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Location
                                </th>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                   Price
                                </th>
                                {/* <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Registration Number
                                </th> */}
                                {/* <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Model Number
                                </th> */}
                                {/* <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Image
                                </th>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Insurance Image
                                </th>
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Bluebook Image
                                </th> */}
                                <th
                                    className="px-5 py-3 bproduct-b-2 bproduct-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Description
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Available
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                            rents && rents.map((rent)=>{
                                return (
                                    
                                    <tr key={rent._id}>
                                       <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p onClick={()=>navigate(`/admin/products/${rent._id}`)} className="text-blue-900 whitespace-no-wrap" style={{textDecoration:'underline'}} >{rent._id}</p>
                                    </td>
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.hostedBy}</p>
                                    </td>
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productName}</p>
                                    </td>
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productBrand}</p>
                                    </td>
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productCategory }</p>
                                    </td>
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productLocation }</p>
                                    </td>
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productPrice}</p>
                                    </td>
                                    {/* <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productRegistrationNumber}</p>
                                    </td> */}
                                    {/* <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productModelNumber}</p>
                                    </td> */}
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.productDescription}</p>
                                    </td>
                                    <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.availableDate}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button onClick={()=>approveProduct(order._id)}  className="text-gray-900 whitespace-no-wrap bg-red-400 p-2">Approve</button>
                                    </td>
                                    {/* <td className="px-5 py-5 bproduct-b bproduct-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{rent?.approved}</p>
                                    </td> */}
                                </tr>
                                )
                            })
                        }
                        
                               
                              
                                
           
                
                        </tbody>
                    </table>
                    <div
                        className="px-5 py-5 bg-white bproduct-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Myproducts