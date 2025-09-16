import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5 text-start">
        <p className="mt-5 text-active fs-4 ">
       404! 
      </p>
      <p className=" text-active fs-2  mb-3">
       Kiaan couldn’t find that page
      </p>
      <p className=" fs-5 mt-3">
        We couldn’t find the page you were looking for.
      </p  >
      <p  className="fs-5">
        Visit <a href="/"style={{textDecoration:"none"}} >Zerodha’s home page</a>
      </p>
   
    </div>
  );
}

export default NotFound;
