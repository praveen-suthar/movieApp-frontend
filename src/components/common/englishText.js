export const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const ENGLISHTEXT = {
  NAVBAR: {
    HOME: "Home",
    ADD: "Add",
    ASC: "Asc",
    DES: "Des",
    SEARCH_MOVIE_PLACEHOLDER: "Search Movie",
  },
  ADDMOVIE: {
    HEADING: "Add your movie",
    IMAGE: "Upload image",
    UPDATE_IMAGE: "Update image",
    TITLE: "Title",
    DESCRIPTION: "Description",
    RELEASE_DATE: "Release Date",
    WATCH_TIME: "Watchtime",
    CASTING: "Casting",
    DIRECTOR: "Director",
    PRODUCER: "Producer",
    ADD_TRAILER_URL: "Add trailer url",
  },
  MOVIEDETAILS: {
    MOVIE_TITLE: "Movie Title",
    DESCRIPTION: "Description",
    DURATION: "Duration",
    WATCH_TIME: "Watchtime",
    RELEASE: "Release",
    CASTING: "Casting",
    DIRECTOR: "Director",
    PRODUCER: "Producer",
  },
  CONFIRMATION_MODEL: {
    CON_MESSAGE: "Are you sure you want to delete this movie?",
  },
  BUTTON: {
    SUBMIT: "Submit",
    ADD: "Add",
    UPDATE: "Update",
    WATCH_TRAILER: "Watch trailer",
    CANCEL: "Cancel",
    CONFIRM: "Confirm",
    GO_BACK: "Go back",
  },
  ERROR_MESSAGE: {
    OOPS: "Oops!!",
    NOT_FOUND: "Sorry, Page not found.",
  },
  TOAST_MESSAGES: {
    SUCCESS: "Movie added successfully",
    IMAGE_REQ: "Image is required",
    TITLE_REQ: "Title is required",
    CAST_REQ: "Cast is required",
    RELEASE_DATE_REQ: "Release Date is required",
    WATCH_TIME_REQ: "Watch time is required",
    WATCH_TIME_INVALID: "The movie duration should be no longer than 4 hours",
    DIRECTOR_REQ: "Director is required",
    PRODUCER_REQ: "Producer is required",
    TRAILER_URL_REQ: "Trailer URL is required",
    INVALID_URL: "Invalid URL",
    DESCRIPTION_REQ: "Description is required",
    MISSING_FILLED:"please add missing filled"
    
  },
};

//toast.success({ENGLISHTEXT.TOAST_MESSAGES.SUCCESS});
