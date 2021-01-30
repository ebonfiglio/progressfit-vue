import Axios from "axios";
import { API } from "../shared/config";

const BASE_URL = `${API}tos/`;

class TosService {
  async get() {
    try {
      var response = await Axios.get(`${BASE_URL}`);
      if (response.status === 200) return response.data;
      throw new Error("Error getting data from server.");
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new TosService();
