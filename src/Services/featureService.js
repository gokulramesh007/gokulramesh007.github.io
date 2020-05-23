import axios from "axios";
import { Strings } from "../constants";

export const fetchFeatures = async () => {
  try {
    let response = await axios.get(Strings.APPLICATION.API.FEATURES, {});
    return response;
  } catch (error) {
    console.log("Network error : ", error);
    return error.message;
  }
};
