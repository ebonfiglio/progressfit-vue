import Axios from "axios";
import { API } from "../shared/config";

const BASE_URL = `${API}appuser/`;
class AppUserService {
  async get(id) {
    try {
      var response = await Axios.get(`${BASE_URL}${id}`);
      if (response.status === 200) return response.data;
      throw new Error("Error getting data from server.");
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async create(user) {
    try {
      var response = await Axios.post(`${BASE_URL}`, user, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) return response.data;
      throw new Error("Error creating user on server.");
    } catch (error) {
      console.log(error);
      console.log(response);
      return null;
    }
  }
  async delete(id) {
    try {
      var response = await Axios.delete(`${BASE_URL}${id}`);
      if (response.status === 200) return response.status;
      throw new Error("Error deleting user on server.");
    } catch (error) {
      console.log(error);
      return response.status;
    }
  }
  async update(user) {
    try {
      var response = await Axios.put(
        `${BASE_URL}${user.id}`,
        { user },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) return response.data;
      throw new Error("Error updating item on server.");
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
export default new AppUserService();
