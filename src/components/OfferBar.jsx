import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

const OfferBar = () => {
    const [offerCls, updateOfferCls] = useState("container-fluid topOfferBar");

    return (

        <div className={offerCls}>
            <div className="row alert fs-5 p-0 rounded-0 mb-0" style={{backgroundColor: "var(--primary)", color: "white"}}>
                <div className="col-11">
                    <div> <strong>Black Friday!</strong> Get 40% off on any purchase. </div>
                </div>
                <div className="col">
                    <div className="text-end pb-1" role="button" onClick={() => {
                        updateOfferCls(offerCls + " d-none");
                    }}>
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default OfferBar