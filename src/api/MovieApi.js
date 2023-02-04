import axios from "axios";

export default axios.create({
  //endpoint
  baseURL: "https://www.omdbapi.com/"
});
