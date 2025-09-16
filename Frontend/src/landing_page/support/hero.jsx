import React from 'react';
function Hero() {
    return ( 
        <>
        <section className="container-fluid" id='supportHero'>
          <div className="p-5" id='supportWrapper'>
            <h5>Support Portal</h5>
            <a href="" style={{color:"white"}}>Track Tickets</a>
          </div>
          <div className=" row p-4 m-3  ">
             <div className=" col-6 p-4">
             <h1 className='mx-5 fs-3'>Search for an answer or browser help topics to create a ticket</h1><br />
             <input className='mx-5' type="text" placeholder='Eg:how do i activate F&O,why my order getting rejected' /><br />
             <a href="" className='mx-5' style={{color:'white'}}>Track account opening</a>
             <a href="" style={{color:'white',marginLeft:"-20px"}}>Track segment activation</a>
             <a href="" style={{color:'white',marginLeft:"30px"}}>Intraday margins</a><br />
             <a href=""  className='mx-5' style={{color:'white'}}>Kite user manual</a>
             </div>
             <div className=" col-6 p-5  ">
             <h1 className='fs-3'>Featured</h1>
             <ol>
             <li>
              <a href=""style={{color:'white',}}>Curent Takeovers and Delisting - January 2025</a>
             </li>
             <li>
             <a href=""style={{color:'white',lineHeight:2 }}>Track segment activation</a>
             </li>
             </ol>
             </div>
          </div>
        </section>
        </>
     );
}

export default Hero;