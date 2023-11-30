import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ENGLISHTEXT } from "../common/englishText";
import "../../assets/style/addMovie.css";
import "react-toastify/dist/ReactToastify.css";
import { apiURL } from "../common/englishText";

const useUpdateMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  const [validation, setValidation] = useState({
    title: true,
    cast: true,
    release: true,
    watchtime: true,
    director: true,
    producer: true,
    trailer: true,
    description: true,
  });

  const updateValidation = (field, isValid) => {
    setValidation((prevValidation) => ({
      ...prevValidation,
      [field]: isValid,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    Object.entries(formValues).forEach(([field, value]) => {
      const trimmedValue = (value || "").toString().trim();
      const isFieldValid = trimmedValue !== "" || field === "image";
      updateValidation(field, isFieldValid);
      isValid = isValid && isFieldValid;
    });
    return isValid;
  };

  useEffect(() => {
    axios
      .get(`${apiURL}${id}`)
      .then((response) => setFormValues(response.data))
      .catch((err) => console.log(err));
  }, []);

  const updateMoiveDetails = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      axios.put(`${apiURL}${id}`, formValues).then(() => {
        navigate("/");
      });
    } else {
      toast.error(ENGLISHTEXT.TOAST_MESSAGES.MISSING_FILLED);
    }
  };

  const addImageHandler = (event, elementId) => {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setFormValues({
          ...formValues,
          image: reader.result,
        });
        selectedImage.src = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  return {
    addImageHandler,
    updateMoiveDetails,
    validateForm,
    updateValidation,
    validation,
    formValues,
    setFormValues,
  };
};

export default useUpdateMovie;
