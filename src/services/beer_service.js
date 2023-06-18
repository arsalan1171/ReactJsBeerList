import axios from "axios";

let API_URL = "https://localhost:7199"; //"https://beerservice.azurewebsites.net";

const getBeersList = async () => {
  try {
    let response = await axios.get(API_URL + "/beer/menu");
    return response.data;
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const getBeerById = async (id) => {
  try {
    let response = await axios.get(API_URL + `/beer/${id}`);
    return response.data;
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const getRandomBeer = async () => {
  try {
    let response = await axios.get(API_URL + "/beer/random");
    return response.data;
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const beerService = { getBeersList, getBeerById, getRandomBeer };

export default beerService;
