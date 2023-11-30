import React,{ useState, useEffect }  from "react";
import NavBar from "../pages/NavBar";
import Card from "./MovieCard";
import axios from "axios";
import { apiURL } from "../common/englishText";

const Home = () => {
  const [results, setResults] = useState([]);
  const [sortingData, setSortingData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setSortingData(response.data);
        setSortedData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortAscending = () => {
    const ascendingData = [...sortingData].sort((a, b) => (a.title > b.title ? 1 : -1));
    setSortedData(ascendingData);
    setIsAscending(true);
  };

  const sortDescending = () => {
    const descendingData = [...sortingData].sort((a, b) => (a.title > b.title ? -1 : 1));
    setSortedData(descendingData);
    setIsAscending(false);
  };

  return (
    <>
    <NavBar 
      setResults={setResults}
      sortAscending={sortAscending}
      sortDescending={sortDescending}
      />
     {results && <Card results={results} sortedData={sortedData}/>}
    </>
  );
};

export default Home;
