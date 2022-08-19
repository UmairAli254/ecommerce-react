import "./SingleProduct.css";
import Img from "../../../img/p8.jpg";

const SingleProduct = () => {
    return (
        <div className="container">
            <div className="card SProCard">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">

                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={Img} className="SProImg" /></div>
                            </div>
                        </div>


                        <div className="details col-md-6">
                            <h3 className="product-title">men's shoes fashion</h3>

                            <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                            <h6 className="price">current price: <span className="fs-4 ps-2 mt-1">$180</span></h6>
                            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                            <div className="sizes">sizes:
                                <select name="SingleProSize" id="SingleProSize" className="option SingleProSizeOpt">
                                    <option>Extra Large</option>
                                    <option>Large</option>
                                    <option>Medium</option>
                                    <option>Small</option>
                                    <option>Extra Small</option>

                                </select>
                                <span className="proQuantity ms-5 ps-5">
                                    <span className="incDec">-</span>
                                    <span className="quantity">1</span>
                                    <span className="incDec">+</span>
                                </span>
                            </div>
                            <h5 className="colors">colors:
                                <span className="color orange" title="Not In store"></span>
                                <span className="color green"></span>
                                <span className="color blue"></span>
                            </h5>
                            <div className="action">
                                <button className="add-to-cart btn SProBtn mt-4" type="button">add to cart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct