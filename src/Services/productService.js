import axios from "axios";
import { Strings } from "../constants";

export const fetchProducts = async category => {
  try {
    let response = await axios.get(
      Strings.APPLICATION.API.PRODUCTS + category,
      {}
    );
    return response;
  } catch (error) {
    console.log("Network error : ", error);
    return error.message;
  }
};
