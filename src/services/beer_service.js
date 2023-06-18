import axios from "axios";

let API_URL = "https://localhost:7199"; //"https://beerservice.azurewebsites.net";

const getBeersList = async () => {
  try {
    let response = await axios.get(API_URL + "/beer/menu");
    return response.data;
  } catch (exception) {
    throw exception;
  }
};

const getBeerById = async (id) => {
  try {
    let response = await axios.get(API_URL + `/beer/${id}`);
    return response.data;
  } catch (exception) {
    throw exception;
  }
};

const getRandomBeer = async () => {
  try {
    let response = await axios.get(API_URL + "/beer/random");
    return response.data;
  } catch (exception) {
    throw exception;
  }
};

const beerService = { getBeersList, getBeerById, getRandomBeer };

export default beerService;
