import React from "react";
import NavBar from "./pages/NavBar";

const ErrorPage = () => {
  return (
    <>
    <NavBar/>
    <div className="position-absolute bottom-50 end-50">
      <h3>
        Oops!!
      </h3>
      <p>Sorry, Page not found.</p>
    </div>
    </>
    
  );
};

export default ErrorPage;
