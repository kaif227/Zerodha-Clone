import React from 'react';

function Awards() {
    return ( 
        <>
        <div className='container p-5 mb-5'>
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-6 p-3 text-center">
                    <img 
                        src="media/images/largestBroker.svg" 
                        alt="Awards" 
                        className="img-fluid"
                    />
                </div>

                {/* Text Section */}
                <div className="col-12 col-md-6 p-3 mt-4 mt-md-5 text-center text-md-start"> 
                    <h1 className="fs-3 fs-md-2">Largest stock broker in India</h1>
                    <p className='mb-4'>
                        2+ million Zerodha clients contribute to over 15% of all 
                        retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className='row'>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Gov. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <img 
                        src="media/images/pressLogos.png" 
                        className="img-fluid mt-4" 
                        alt="Press Logos"
                    />
                </div>
            </div>
        </div>
        </>
     );
}

export default Awards;
