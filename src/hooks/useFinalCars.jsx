import { useState, useEffect } from "react";
import { useCars } from "./useCars";
import { getCars } from "../api/api";

const searchFields = ["make", "model", "year", "price"];

export function useFinalCars() {
  const [data] = useCars();
  const [cars, setCars] = useState([]);
  let finalCars = [];

  useEffect(() => {
    (async function () {
      const [carsRes, carsResError] = await getCars();
      if (!carsResError) {
        setCars(carsRes.data);
      }
    })();
  }, []);

  const queryArray = data.searchQuery
    .trim()
    .toUpperCase()
    .split(" ")
    .filter((word) => Boolean(word));

  let newArray = cars.filter((car) => {
    return queryArray.every((word) => {
      return searchFields.some((field) => {
        return String(car[field]).toUpperCase().includes(word);
      });
    });
  });

  finalCars = newArray.sort((a, b) => {
    return (
      String(a[data.sortParams.key]).localeCompare(
        String(b[data.sortParams.key]),
        "en",
        { numeric: true }
      ) * data.sortParams.order
    );
  });
  return finalCars;
}
