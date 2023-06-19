import beerService from "../../services/beer_service";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BeerList = (searchQuery) => {
  const [beerList, setBeerList] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState({});

  const handleClose = () => {
    setShow(false);
    setSelectedBeer({});
  };

  const handleShowSelectedBeer = async (beerId) => {
    setShow(true);
    const getDesiredBeer = await beerService.getBeerById(beerId);
    setSelectedBeer(getDesiredBeer);
  };

  const handleRandomBeer = async () => {
    setShow(true);
    const randomBeer = await beerService.getRandomBeer();
    setSelectedBeer(randomBeer);
  };

  useEffect(() => {
    let isComponentMounted = true;
    const loadBeerList = async () => {
      if (isComponentMounted) {
        const getBeerList = await beerService.getBeersList();
        setBeerList(getBeerList);
      }
    };
    loadBeerList();

    return () => {
      isComponentMounted = false;
    };
  });

  const filtered = !searchQuery?.beerName
    ? beerList
    : beerList.filter((beer) =>
        beer.name.toLowerCase().includes(searchQuery?.beerName.toLowerCase())
      );

  return (
    <>
      <Button
        className="mb-4"
        variant="warning"
        onClick={() => handleRandomBeer()}
      >
        Generate Random Beer
      </Button>
      {filtered?.length !== 0 ? (
        <div style={{ height: "20rem", overflowY: "scroll" }}>
          {filtered.map((beer, index) => (
            <ListGroup variant="flush" key={index}>
              <ListGroup.Item
                action
                onClick={() => handleShowSelectedBeer(beer.id)}
              >
                {beer.name}
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      ) : (
        <></>
      )}

      <Modal show={show} onHide={() => handleClose()} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBeer?.name ?? "Loading..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col>
                <h4>Tagline: </h4>
                <p>{selectedBeer?.tagline ?? "Loading..."}</p>
                <h4>First Brewed: </h4>
                <p>{selectedBeer?.first_brewed ?? "Loading..."}</p>
              </Col>
              <Col>
                <img alt="" src={selectedBeer?.image_url} height={"160px"} />
              </Col>
            </Row>
            <h4>Description: </h4>
            <p>{selectedBeer?.description ?? "Loading..."}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BeerList;
