import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import { ENGLISHTEXT } from "../common/englishText";
import "../../assets/home.css"

const MoiveDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://movieapplication-fmdi.onrender.com/users/${id}`)
      .then((response) => setMovieDetails(response.data))
      .catch((err) => console.log(err));
  }, []);

  // const addImageHandler = (e) => {
  //   const reader = new FileReader();
  
  //   reader.onload = () => {
  //     setFormValues({
  //       ...formValues,
  //       image: {
  //         imageUrl: reader.result,
  //         imageFile: e.target.files[0],
  //       },
  //     });
  //   };
  
  //   reader.readAsDataURL(e.target.files[0]);
  // };


  console.log("image", movieDetails)

  return (
    <>
    <NavBar/>
      <div className="container movie-des">
      <div className="row">
      <div className="col-8" >
      <img src={movieDetails.image} className="movie-img"/>
      </div>
      <div className="col-4 mt-4">
      <h3>{ENGLISHTEXT.MOVIEDETAILS.MOVIE_TITLE} : {movieDetails.title}</h3>
      <h4>{ENGLISHTEXT.MOVIEDETAILS.DESCRIPTION} : {movieDetails.description}</h4>
      <h4>{ENGLISHTEXT.MOVIEDETAILS.WATCH_TIME}: {movieDetails.watchtime} </h4>
      <h4>{ENGLISHTEXT.MOVIEDETAILS.RELEASE}: {movieDetails.release}</h4>
      <h4>{ENGLISHTEXT.MOVIEDETAILS.CASTING}: {movieDetails.cast} </h4>
      <h4>{ENGLISHTEXT.MOVIEDETAILS.DIRECTOR}: {movieDetails.director} </h4>
      <h4>{ENGLISHTEXT.MOVIEDETAILS.PRODUCER}: {movieDetails.producer} </h4>
      <Link to={movieDetails.trailor} target="_blank" > <button type="button" className="btn btn-secondary">{ENGLISHTEXT.BUTTON.WATCH_TRAILER}</button></Link>
      </div>
    </div>
      </div>
    </>
  );
};

export default MoiveDetails;
