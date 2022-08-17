import "./SingleProduct.css";

const SingleProduct = () => {
    return (
        <div class="container">
            <div class="card SProCard">
                <div class="container-fliud">
                    <div class="wrapper row">
                        <div class="preview col-md-6">

                            <div class="preview-pic tab-content">
                                <div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" className="SProImg"/></div>
                            </div>
                        </div>


                        <div class="details col-md-6">
                            <h3 class="product-title">men's shoes fashion</h3>

                            <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                            <h6 class="price">current price: <span className="fs-4 ps-2 mt-1">$180</span></h6>
                            <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                            <h5 class="sizes">sizes:
                                <select name="SingleProSize" id="SingleProSize" className="option SingleProSizeOpt">
                                    <option>Extra Large</option>
                                    <option>Large</option>
                                    <option>Medium</option>
                                    <option>Small</option>
                                    <option>Extra Small</option>

                                </select>
                            </h5>
                            <h5 class="colors">colors:
                                <span class="color orange" title="Not In store"></span>
                                <span class="color green"></span>
                                <span class="color blue"></span>
                            </h5>
                            <div class="action">
                                <button class="add-to-cart btn btn-default SProBtn mt-4" type="button">add to cart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct