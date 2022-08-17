import React, { useState } from 'react'
import "./Products.css";
import Product from "./Product/Product";
import ProductsAPI from '../../APIs/ProductsAPI';
import { Link } from "react-router-dom";

const Products = ({ ShowBtn }) => {
    // const [showBtn, updateShowBtn] = useState(true);
    return (
        <div className='container all_products pt-3 mb-4'>
            <div className="row">
                {
                    ProductsAPI.map((ele, ind) => {
                        return (
                            <Product Data={ele} key={ind} />
                        )
                    })
                }
            </div>
            <div className="row">
                {

                    ShowBtn && <Link to="/all-products" className='allProductsBtn m-auto'><button className='btn btn-dark allProductsBtn m-auto'>All Products</button>
                    </Link>

                }

            </div>
        </div>
    )
}

export default Products