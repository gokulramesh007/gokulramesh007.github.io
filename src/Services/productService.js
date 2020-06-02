import API from "./axiosService";
import { Strings } from "../constants";

export default {
  fetchProducts: category => API(Strings.APPLICATION.API.PRODUCTS + category)
};
