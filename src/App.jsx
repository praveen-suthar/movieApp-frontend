import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/pages/Home";
import AddMovie from "./components/pages/AddMovie";
import ErrorPage from "./components/ErrorPage";
import MoiveDetails from "./components/pages/MoiveDetails";
import UpdateMoive from "./components/pages/UpdateMoive";
import {ThemeContext, themes} from './components/context/ThemeContext.js'

function App() {
  
  const [theme, setTheme] = useState(themes.light);
  const handleOnClick=()=> theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  
  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
  }, [theme]);
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/addmovie",
      element: <AddMovie />,
    },
    {
      path: "/details/:id",
      element: <MoiveDetails />,
    },
    {
      path: "/update/:id",
      element: <UpdateMoive />,
    },
  ]);

  return (
    <>
      <ThemeContext.Provider value={{theme, themes, handleOnClick }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
