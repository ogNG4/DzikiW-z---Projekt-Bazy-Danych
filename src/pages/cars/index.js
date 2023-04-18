import { useState, useEffect } from "react";

export default function Cars() {
  const [cars, setCars] = useState([]);

  // pobieramy samochody z bazy danych przy pomocy funkcji getCarsHandler i ustawiamy je w stanie
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../api/getCars");
      const data = await response.json();
      setCars(data);
    }

    fetchData();
  }, []);
  
  return (
    <>
      <h1>Flota</h1>
      <ul style={{margin: '5rem',  height:'100vh'}}>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} {car.capacity}
          </li>
        ))}
      </ul>
    </>
  );
}

