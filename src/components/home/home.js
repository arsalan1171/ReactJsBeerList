import { Form, FormControl, Button } from "react-bootstrap";
import React, { useState } from "react";
import BeerList from "../beerlist/beerlist";
import "./home.css";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value;
    setSearchText(inputValue);
  };

  return (
    <>
      <h2 className="m-4">Search Beers</h2>
      <div className="search-form">
        <Form
          style={{ display: "flex" }}
          onSubmit={(e) => handleSubmit(e)}
          className="mb-4"
        >
          <FormControl
            type="text"
            id="searchInput"
            placeholder="Search Beers..."
            className="me-3"
          />

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <BeerList beerName={searchText} />
      </div>
    </>
  );
};

export default Home;
