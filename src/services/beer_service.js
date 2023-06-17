import axios from "axios";

let API_URL = "https://beerservice.azurewebsites.net/";

const getBeersList = async () => {
  try {
    let response = await axios.get(API_URL + "/Beer/menu");
    return response.data;
  } catch (exception) {
    throw exception;
  }
};

const getBeerById = async (id) => {
  try {
    let response = await axios.get(API_URL + `/Beer/${id}`);
    return response.data;
  } catch (exception) {
    throw exception;
  }
};

const getRandomBeer = async () => {
  try {
    let response = await axios.get(API_URL + "/Beer/random");
    return response.data;
  } catch (exception) {
    throw exception;
  }
};

const beerService = { getBeersList, getBeerById, getRandomBeer };

export default beerService;
