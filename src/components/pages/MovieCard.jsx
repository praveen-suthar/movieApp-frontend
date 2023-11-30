import { useState } from "react";
import axios from "axios";
import "../../assets/style/confirmationModel.css";
import ConfirmationModel from "./ConfirmationModel";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { apiURL } from "../common/englishText";
const Card = ({ results, sortedData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const navigate = useNavigate();
  const renderedList = results.length > 0 ? results : sortedData;

  const openModal = (id) => {
    setSelectedMovieId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovieId(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    axios.delete(`${apiURL}${selectedMovieId}`).then(() => {
      window.location.reload();
      navigate("/");
    });
    closeModal();
  };

  return (
    <div>
      <div className="container card-imp">
        <div className="row g-3">
          {renderedList.map((item, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="card h-100 d-flex flex-column">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <img
                      src={item.image}
                      className="card-img-top align-self-center mb-3"
                      alt="Image poster"
                    />
                    <h5 className="card-title text-center text-dark">{item.title}</h5>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span>
                      <RiDeleteBinLine
                        onClick={() => openModal(item.id)}
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
      {isModalOpen && (
        <ConfirmationModel onCancel={closeModal} onConfirm={confirmDelete} />
      )}
    </div>
  );
};
export default Card;
