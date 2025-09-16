import React from 'react';

function Education() {
    return ( 
        <div className="container p-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img 
                        src="media/images/education.svg" 
                        alt="Varsity" 
                        className="img-fluid w-75"
                    />
                </div>

                {/* Text Section */}
                <div className="col-12 col-md-6 mt-3 mt-md-5 text-center text-md-start">
                    <h3 className='mb-4 text-muted fs-4 fs-md-2'>
                        Free and open market education
                    </h3>
                    <p>
                        Varsity, the largest online stock market education book in the 
                        world covering everything from the basics to advanced trading.
                    </p>
                    <p className='mb-4'>
                        <a href="#" style={{textDecoration:"none"}}>
                            Versity <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </p>
                    <p>
                        TradingQ&A, the most active trading and investment community 
                        in India for all your market related queries.
                    </p>
                    <p>
                        <a href="#" style={{textDecoration:"none"}}>
                            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Education;
