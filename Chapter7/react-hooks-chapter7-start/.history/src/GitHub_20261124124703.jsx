import React, { useEffect, useState } from "react";
import axios from "axios"; // npm install axios
import { Container, Row, Col, Spinner } from "react-bootstrap";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  };

  function getData = async () => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}`,
    );
    setData(res.data.items);
    setIsLoading(false);
  };

  const listUsers = data.map((user) => (
    <Container key={user.id} className="mt-3">
      <Row key={user.id}>
        <a href={user.html_url}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={user.avatar_url}
            alt="Generic placeholder"
          />
        </a>
        <Col>
          <h5>Login: {user.login}</h5>
          <p>Id: {user.id}</p>
        </Col>
      </Row>
    </Container>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h3>GitHub Users Results</h3>

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {listUsers}
    </div>
  );
}
export default GitHub;
