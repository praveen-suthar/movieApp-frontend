import React from "react";
import NavBar from "./pages/NavBar";
import { ENGLISHTEXT } from "./common/englishText";

const ErrorPage = () => {
  return (
    <>
    <NavBar/>
    <div className="position-absolute bottom-50 end-50">
      <h3>
        Oops!!{ENGLISHTEXT.ERROR_MESSAGE.OOPS}
      </h3>
      <p>{ENGLISHTEXT.ERROR_MESSAGE.NOT_FOUND}</p>
    </div>
    </>
  );
};

export default ErrorPage;
