import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    Authorization: "19023561-06ed-4eed-bb56-1ad1b0aed089",
  },
});

export default axiosInstance;
