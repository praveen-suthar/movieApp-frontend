import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ENGLISHTEXT } from "../common/englishText";
import "../../assets/style/home.css";
import { apiURL } from "../common/englishText";
import NavBar from "../pages/NavBar";
const MoiveDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiURL}${id}`)
      .then((response) => setMovieDetails(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar/>
      <div className="container movie-des">
        <div className="row">
          <div className="col-md-8">
            <img
              src={movieDetails.image}
              className="movie-img img-fluid"
              alt="Movie Poster"
            />
          </div>
          <div className="col-md-4 mt-4">
            <h3>
              {ENGLISHTEXT.MOVIEDETAILS.MOVIE_TITLE} : {movieDetails.title}
            </h3>
            <h4>
              {ENGLISHTEXT.MOVIEDETAILS.DESCRIPTION} :{" "}
              {movieDetails.description}
            </h4>
            <h4>
              {ENGLISHTEXT.MOVIEDETAILS.WATCH_TIME}: {movieDetails.watchtime}{" "}
            </h4>
            <h4>
              {ENGLISHTEXT.MOVIEDETAILS.RELEASE}: {movieDetails.release}
            </h4>
            <h4>
              {ENGLISHTEXT.MOVIEDETAILS.CASTING}: {movieDetails.cast}{" "}
            </h4>
            <h4>
              {ENGLISHTEXT.MOVIEDETAILS.DIRECTOR}: {movieDetails.director}{" "}
            </h4>
            <h4>
              {ENGLISHTEXT.MOVIEDETAILS.PRODUCER}: {movieDetails.producer}{" "}
            </h4>
            <Link to={movieDetails.trailer} target="_blank">
              <button type="button" className="btn btn-secondary">
                {ENGLISHTEXT.BUTTON.WATCH_TRAILER}
              </button>
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Link to="/">
              <button type="button" className="btn btn-secondary btn-sm">
                {ENGLISHTEXT.BUTTON.GO_BACK}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoiveDetails;
