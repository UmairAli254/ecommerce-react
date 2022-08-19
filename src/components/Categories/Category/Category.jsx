import React, { useState } from "react";
import "./Category.css";

const Category = ({ Data }) => {
    const { name, img } = Data;


    // For OverFlow Content Hide/Show
    const [overLayClaases, updateOverLayClsses] = useState("card-img-overlay invisible");

    // Show Overlay
    const showOverLay = () => updateOverLayClsses("card-img-overlay");

    // Hide Overlay
    const hideOverLay = () => updateOverLayClsses("card-img-overlay invisible");


    return (
        <div className="col col-12 col-lg-4 col-md-4 col-sm-12 h-50 mb-1">
            <div className="card text-bg-dark allCategoryDiv" role="button" onMouseEnter={showOverLay}
                onMouseLeave={hideOverLay}>
                <img src={img} className="card-img" />

                <div className={overLayClaases} >
                    <h2 className="card-title"> {name} </h2>
                    <a href="#" className="card-btn"> <button className="btn btn-light mt-5">Check Items</button></a>
                </div>

            </div>
        </div >
    )
}

export default Category