import axios from "axios";
const api = axios.create({
  baseURL: "http://relcon.ca:15300/api/v1",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.response.use(
  (response) => {
    return [response, null];
  },
  (error) => {
    return [null, error];
  }
);

export function getCars() {
  return api.get("/cars");
}

export function getCar(id) {
  return api.get("/cars/" + id);
}

export function addCar(newCar) {
  return api.post("/cars", newCar);
}
