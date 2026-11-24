import React, { useEffect, useState } from "react";
import axios from "axios"; // npm install axios
import Spinner from "react";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("greg");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        // console.log(res.data.items);
        setData(res.data.items);
        setIsLoading(false);
      });
  }, []);

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
export default GitHub;
