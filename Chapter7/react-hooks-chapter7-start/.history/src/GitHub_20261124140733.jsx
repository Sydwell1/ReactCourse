import React, { useEffect, useState } from "react";
import axios from "axios"; // npm install axios
import { Container, Row, Col, Spinner } from "react-bootstrap";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  };

  const [count, setCount] = useState(10); // new

  const getData = async () => {
    try {
      const perPage = Math.min(100, Math.max(1, Number(count) || 1));
      const res = await axios.get("https://api.github.com/search/users", {
        params: { q: searchTerm, per_page: perPage }, // axios builds ?q=greg&per_page=10
      });
      setData(res.data.items);
      setError("");
    } catch (err) {
      setError("Could not get users from GitHub. ...");
    }
    setIsLoading(false);
  };

  // in the form, next to the name input:
  <input
    type="number"
    min="1"
    max="100"
    value={count}
    onChange={(event) => setCount(event.target.value)}
  />;

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
