import axios from "axios";
import "../../assets/home.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ results, sortedData }) => {
  const navigate = useNavigate();
  const renderedList = results.length > 0 ? results : sortedData;

  // Function for delete
  const deleteMovie = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this moive"
    );
    if (confirm) {
      axios.delete(`https://movieapplication-fmdi.onrender.com/users/${id}`).then(() => {
        window.location.reload();
        navigate("/");
      });
    }
  };

  //console.log("isFilter", results);

  return (
    <div>
      <div className="container">
        <div className="row gy-5 mt-5">
          {renderedList.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card card-box">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="Imageposter"
                  />
                  <div className="card-body text-dark">
                    <h5 className="card-title text-center">{item.title}</h5>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span>
                      <RiDeleteBinLine
                        onClick={() => deleteMovie(item.id)}
                        className="text-dark"
                      />
                    </span>
                    <Link to={`/update/${item.id}`} className="text-dark">
                      <BiSolidEditAlt />
                    </Link>
                    <Link to={`/details/${item.id}`} className="text-dark">
                      <TbListDetails />
                    </Link>
                  </div>
                </div>
              </div>           
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
