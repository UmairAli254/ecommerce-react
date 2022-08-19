import React, { useState } from 'react'
import "./Product.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = (props) => {
    const img = props.Data;

    // For OverFlow Content Hide/Show
    const [overLayClaases, updateOverLayClsses] = useState("card-img-overlay h-100 invisible");

    // Show Overlay
    const showOverLay = () => updateOverLayClsses("card-img-overlay h-100 d-flex align-items-center justify-content-center");

    // Hide Overlay
    const hideOverLay = () => updateOverLayClsses("card-img-overlay h-100 invisible");


    return (
        <div className="col-12 col-md-3 col-sm-12 col-xs-12 mb-3">
            <div className="card text-bg-dark product_div" role="button" onMouseEnter={showOverLay}
                onMouseLeave={hideOverLay}>
                <img src={img} className="product-img" />

                <div className={overLayClaases} >
                    <div className="p_overIcons text-center">
                        <ShoppingCartOutlinedIcon className='fs-2 proIcon' />
                        <FavoriteBorderOutlinedIcon className='fs-2 proIcon' />
                        <SearchOutlinedIcon className='fs-2 proIcon' />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Product