import React, { useState, useEffect } from "react";
import AddCar from "./AddCar";

const CarsManager = () => {
  const [cars, setCars] = useState(false);
  const [status, setStatus] = useState(false);
  const URL = "http://localhost:3000/cars";
  const fetchCars = async (url) => {
    const res = await fetch(url);
    const resParsed = await res.json();
    console.log(resParsed);
    setCars(resParsed);
  };
  useEffect(() => {
    fetchCars(URL);
  }, [status]);
  const deleteCar = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    setStatus((prevState) => !prevState);
  };
  const carList = cars
    ? cars.map((car) => (
        <li key={car.id}>
          {car.name}
          <button onClick={() => deleteCar(car.id)}>Sold</button>
        </li>
      ))
    : "no cars";
  return (
    <div>
      <ul>{carList}</ul>

      <AddCar />
    </div>
  );
};
export default CarsManager;