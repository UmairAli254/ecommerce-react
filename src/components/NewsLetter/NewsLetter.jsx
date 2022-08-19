import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="container mt-5 pt-5 newsletterContainer">
            <div className="row">
                <div className="col-xl-12 col-lg-12 mx-auto">

                    <div className="card cardNewsLetter p-4 px-5">

                        <h2 className="font-weight-bold text-white">Stay tuned</h2>

                        <h6 className="text-black-50 mb-5 text-color">Subscribe to our newsletter and never miss our latest news, designs, and product updates.</h6>

                        <div className="form-group bg-white border rounded px-2 py-2 mb-2">
                            <div className="row rowofinput">
                                <div className="col inputemailsubmit">
                                    <input type="email" name="email" className="form-control pl-3 shadow-none bg-transparent border-0" placeholder="Enter your email address" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btnstyle btn-block btn-dark-news newLetterBtn"><i className="fa fa-paper-plane-o mr-2"></i>Get notified</button>
                                </div>
                            </div>
                        </div>

                        <span className="mb-4 text-color">No spam, notifications only about new products, updates and freebies.</span>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewsLetter