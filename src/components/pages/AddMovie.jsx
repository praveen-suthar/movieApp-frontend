import NavBar from "./NavBar";
import { ENGLISHTEXT } from "../common/englishText";
import "../../assets/style/addMovie.css";
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAddmovie from "../Hook/useAddmovie";

const AddMovie = () => {
 const {errors, formValues, handleSubmit,addImageHandler,setFormValues } = useAddmovie()
  
  return (
    <>
      <NavBar/>
      <section className="container_add_new forms text-dark">
        <div className="form_add_new">
          <form className="row g-3 m-0">
            <div className="">
              <h4 className="mb-2 d-flex justify-content-center">
               {ENGLISHTEXT.ADDMOVIE.HEADING}
              </h4>
              <div className="mb-2 d-flex justify-content-center">
                <img
                  id="selectedImage"
                  src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                  alt="imagePoster"
                  className="img_size"
                />
              </div>
              <div className="pt-1 d-flex justify-content-center">
                <div className="btn btn-primary btn-rounded">
                  <label
                    className="form-label text-white mb-0 pt-0 px-3"
                    for="customFile1"
                  >
                    {ENGLISHTEXT.ADDMOVIE.IMAGE}
                  </label>
                  <input
                    type="file"
                    className="form-control d-none"
                    id="customFile1"                 
                    name="image"
                    onChange={(e) => addImageHandler(e, 'selectedImage')} 
                  />
                </div>
              </div>
            </div>
            <div className="m-0 mb-0 pt-0 pb-0 d-flex justify-content-center">
              <div className="col-md-6 mt-3 px-3">
                <label for="inputtext1" className="form-label">
                 {ENGLISHTEXT.ADDMOVIE.TITLE}
                </label>
                <input
                placeholder={ENGLISHTEXT.ADDMOVIE.TITLE}
                type="text"             
                className={`form-control p-2 ${errors.title && !formValues.title.trim() ? "input-error" : ""}`}
                value={formValues.title}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
               
              />
              </div>
              <div className="col-md-6 mt-3 px-3">
                <label for="inputtext2" className="form-label">
                {ENGLISHTEXT.ADDMOVIE.CASTING}
                </label>
                <input
                placeholder={ENGLISHTEXT.ADDMOVIE.CASTING}
                type="text"          
                className={`form-control p-2 ${errors.cast && !formValues.cast.trim() ? "input-error" : ""}`}
                value={formValues.cast}
                onChange={(e) =>
                  setFormValues({ ...formValues, cast: e.target.value })
                }
              />              
              </div>
            </div>
            <div className="m-0 mb-0 pt-0 pb-0 d-flex justify-content-center">
              <div className="col-md-6 mt-3 px-3">
                <label for="dateField" className="form-label">
                {ENGLISHTEXT.ADDMOVIE.RELEASE_DATE}
                </label>             
                <input
                placeholder={ENGLISHTEXT.ADDMOVIE.RELEASE_DATE}               
                className={`form-control p-2 ${errors.release && !formValues.release.trim() ? "input-error" : ""}`}
                type="date"
                value={formValues.release}
                onChange={(e) =>
                  setFormValues({ ...formValues, release: e.target.value })
                }
              />
              </div>
              <div className="col-md-6 mt-3 px-3">
                <label for="timeField" className="form-label">
                {ENGLISHTEXT.ADDMOVIE.WATCH_TIME}
                </label>
                <input
                placeholder={ENGLISHTEXT.ADDMOVIE.WATCH_TIME}
                type="time"            
                className={`form-control p-2 ${errors.watchtime && !formValues.watchtime.trim() ? "input-error" : ""}`}
                value={formValues.watchtime}
                onChange={(e) =>
                  setFormValues({ ...formValues, watchtime: e.target.value })
                }
              />
              </div>
            </div>
            <div className="m-0 mb-0 pt-0 d-flex justify-content-center">
              <div className="col-md-6 mt-3 px-3">
                <label for="DirectorField" className="form-label">
                {ENGLISHTEXT.ADDMOVIE.DIRECTOR}
                </label>
                <input
                placeholder={ENGLISHTEXT.ADDMOVIE.DIRECTOR}
                type="text"          
                className={`form-control p-2 ${errors.director && !formValues.director.trim() ? "input-error" : ""}`}
                value={formValues.director}
                onChange={(e) =>
                  setFormValues({ ...formValues, director: e.target.value })
                }
              />
              </div>
              <div className="col-md-6 mt-3 px-3">
                <label for="ProducerField" className="form-label">
                {ENGLISHTEXT.ADDMOVIE.PRODUCER}
                </label>              
                <input
                placeholder={ENGLISHTEXT.ADDMOVIE.PRODUCER}
                type="text"              
                className={`form-control p-2 ${errors.producer && !formValues.producer.trim() ? "input-error" : ""}`}
                value={formValues.producer}
                onChange={(e) =>
                  setFormValues({ ...formValues, producer: e.target.value })
                }
              />
              </div>
            </div>
            <div className="m-0 mb-1 pt-2 d-flex justify-content-center">
              <div className="col-md-12 px-3 ">
                <label for="TrailerUrlField" className="form-label">
                {ENGLISHTEXT.ADDMOVIE.ADD_TRAILER_URL}
                </label>
                <input
                placeholder={ENGLISHTEXT.ADDMOVIE.ADD_TRAILER_URL}
                type="text"            
                className={`form-control p-2 ${errors.trailer && !formValues.trailer.trim() ? "input-error" : ""}`}
                value={formValues.trailer}
                onChange={(e) =>
                  setFormValues({ ...formValues, trailer: e.target.value })
                }
              />               
              </div>
            </div>
            <div className="m-0 mb-1 pt-1 d-flex justify-content-center">
              <div className="col-md-12 px-3">
                <label for="DescriptionField" className="form-label">
                {ENGLISHTEXT.ADDMOVIE.DESCRIPTION}
                </label>
                <textarea
                placeholder={ENGLISHTEXT.ADDMOVIE.DESCRIPTION}
                type="text"
                cols="10"
                rows="2"
                className={`form-control p-2 ${errors.description && !formValues.description.trim() ? "input-error" : ""}`}
                value={formValues.description}
                onChange={(e) =>
                  setFormValues({ ...formValues, description: e.target.value })
                }
              />              
              </div>
            </div>
            <div className="d-grid gap-1 col-md-auto mx-auto">
              <button
                className="btn btn-primary mb-3 pt-2 px-5"
                type="button"
                data-mdb-ripple-init
                  onClick={handleSubmit}
              >
                {ENGLISHTEXT.BUTTON.ADD}   
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default AddMovie;
