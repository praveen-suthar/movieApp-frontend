import  {useState} from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENGLISHTEXT } from "../common/englishText";
import "../../assets/style/addMovie.css";
import 'react-toastify/dist/ReactToastify.css';
import { apiURL } from "../common/englishText";

const useAddmovie = () => {
  const navigate = useNavigate();
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!validateForm()) {
      return;
    }
      axios
      .post(apiURL, formValues)
      .then(() => {
        navigate("/");
        toast.success(ENGLISHTEXT.TOAST_MESSAGES.SUCCESS);
      });

    setFormValues({
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
    };

    const addImageHandler = (event, elementId) =>{
      const selectedImage = document.getElementById(elementId);
      const fileInput = event.target;
      if (fileInput.files && fileInput.files[0]) {
          const reader = new FileReader();
          reader.onload = function(e) {
               setFormValues({
                 ...formValues,
                 image:reader.result
               })        
              selectedImage.src = e.target.result;
          };
          reader.readAsDataURL(fileInput.files[0]);
      }
    }

    const validateForm = () => {
      let valid = true;
      let newErrors = {};
      if (!formValues.image.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.IMAGE_REQ);
        valid = false;
      }   
      if (!formValues.title.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.TITLE_REQ);
        valid = false;
      }    
      if (!formValues.cast.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.CAST_REQ);
        valid = false;
      }
      if (!formValues.release.trim()) {       
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.RELEASE_DATE_REQ);
        valid = false;
      }   
      if (!formValues.watchtime.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.WATCH_TIME_REQ);
        valid = false;
      } else if (parseFloat(formValues.watchtime) > 4) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.WATCH_TIME_INVALID);
        valid = false;
      }
      if (!formValues.director.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.DIRECTOR_REQ);
        valid = false;
      }   
      if (!formValues.producer.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.PRODUCER_REQ);
        valid = false;
      }
      if (!formValues.trailer.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.TRAILER_URL_REQ);
        valid = false;
      } else {
        if (!urlRegex.test(formValues.trailer)) {       
          toast.error(ENGLISHTEXT.TOAST_MESSAGES.INVALID_URL);
          valid = false;
        }
      }
      if (!formValues.description.trim()) {
        toast.error(ENGLISHTEXT.TOAST_MESSAGES.DESCRIPTION_REQ);
        valid = false;
      }   
      if (valid) {
        toast.success(ENGLISHTEXT.TOAST_MESSAGES.SUCCESS);
      }
      setErrors(newErrors);
      return valid;
    };
    
  return {validateForm, urlRegex, errors, setErrors, addImageHandler,handleSubmit, formValues, setFormValues};
};

export default useAddmovie