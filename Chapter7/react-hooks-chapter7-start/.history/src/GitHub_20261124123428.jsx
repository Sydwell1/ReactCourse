import React, { useEffect, useState } from "react";
import axios from "axios"; // npm install axios
import { Container, Row, Col, Spinner } from "react-bootstrap";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("greg");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
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
