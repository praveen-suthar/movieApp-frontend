import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { ENGLISHTEXT } from "../common/englishText";
const UpdateMoive = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    image: "",
    title: "",
    description: "",
    release: "",
    watchtime: "",
    cast: "",
    director: "",
    producer: "",
    trailer: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://movieapplication-fmdi.onrender.com/users/${id}`)
      .then((response) => setFormValues(response.data))
      .catch((err) => console.log(err));
  }, []);

  const updateMoiveDetails = (e) => {
    e.preventDefault();
    axios.put(`https://movieapplication-fmdi.onrender.com/users/${id}`, formValues).then(() => {
      navigate("/");
    });
  };

  const addImageHandler = (e) => {
    const reader = new FileReader();
  
    reader.onload = () => {
      setFormValues({
        ...formValues,
        image:reader.result,
      });
    };
  
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <NavBar />
      <div className=" d-flex w-100 h-auto justify-content-center align-items-center mt-5 pb-3">
        <div
          className="border shadow px-5 pt-3 pb-3 mt-5 rounded bg-light"
          style={{ width: "30%" }}
        >
          <h3 className="d-grid gap-2 col-7 mx-auto pb-2 text-dark">
            {ENGLISHTEXT.ADDMOVIE.HEADING}
          </h3>
          <form>
            <div className="mb-3 ">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.IMAGE}
                type="file"
                className="form-control"
                name="image"
                onChange={addImageHandler}
                // onChange={(e) =>
                //   setFormValues({ ...formValues, image: e.target.value })
                // }
              />
            </div>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.TITLE}
                type="text"
                className="form-control"
                value={formValues.title}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder={ENGLISHTEXT.ADDMOVIE.DESCRIPTION}
                type="text"
                className="form-control"
                value={formValues.description}
                onChange={(e) =>
                  setFormValues({ ...formValues, description: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.RELEASE_DATE}
                className="form-control"
                type="date"
                value={formValues.release}
                onChange={(e) =>
                  setFormValues({ ...formValues, release: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.WATCH_TIME}
                type="time"
                className="form-control"
                value={formValues.watchtime}
                onChange={(e) =>
                  setFormValues({ ...formValues, watchtime: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.CASTING}
                type="text"
                className="form-control"
                value={formValues.cast}
                onChange={(e) =>
                  setFormValues({ ...formValues, cast: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.DIRECTOR}
                type="text"
                className="form-control"
                value={formValues.director}
                onChange={(e) =>
                  setFormValues({ ...formValues, director: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.PRODUCER}
                type="text"
                className="form-control"
                value={formValues.producer}
                onChange={(e) =>
                  setFormValues({ ...formValues, producer: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.ADD_TRAILER_URL}
                type="text"
                className="form-control"
                value={formValues.trailer}
                onChange={(e) =>
                  setFormValues({ ...formValues, trailer: e.target.value })
                }
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto pb-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={updateMoiveDetails}
              >
                {ENGLISHTEXT.BUTTON.SUBMIT}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMoive;
