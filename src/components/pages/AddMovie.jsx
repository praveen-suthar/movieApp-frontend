import { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENGLISHTEXT } from "../common/englishText";

const AddMovie = () => {
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({
    image: "",
    title:"",
    description: "",
    release:"",
    watchtime:"",
    cast: "",
    director: "",
    producer: "",
    trailer:""
  });
  
  const handleSubmit = (e) => {
    //https://movieapp-65b6b-default-rtdb.firebaseio.com/users.json
    e.preventDefault();
    axios.post("https://movieapplication-fmdi.onrender.com/users", formValues ).then(() => {
      navigate("/");
    });

    console.log(formValues);
    setFormValues({
      image: "",
      title:"",
      description: "",
      release: "",
      watchtime: "",
      cast: "",
      director: "",
      producer: "",
      trailer:""
    });
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     // Use FileReader to convert the selected image to a data URL
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setImage(null);
  //   }
  //   setFormValues({ ...formValues, image: image })
  // };

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
    <>
      <NavBar />
      <div className=" d-flex w-100 h-auto justify-content-center align-items-center mt-5 pb-3">
        <div className="border shadow px-5 pt-3 pb-3 mt-5 rounded bg-light" style={{width:"30%"}}>
          <h3 className="d-grid gap-2 col-7 mx-auto pb-2 text-dark">{ENGLISHTEXT.ADDMOVIE.HEADING}</h3>
          <form>
            <div className="mb-3">
              <input
                placeholder={ENGLISHTEXT.ADDMOVIE.IMAGE}
                type="file"
                className="form-control"
                name="image"                
                onChange={addImageHandler}
                // onChange={(e) =>
                //   setFormValues({ ...formValues, image: e.target.value })
                // }
                required
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
                  setFormValues({ ...formValues, release: e.target.value})
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
              onClick={handleSubmit}             
            >
              {ENGLISHTEXT.BUTTON.SUBMIT}
            </button>
            </div>           
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
