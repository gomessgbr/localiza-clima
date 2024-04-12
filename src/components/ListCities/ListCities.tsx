import { GeoDBCityResponse, GeoData } from "../../model/GeoDbApiModel";
import { useGetForecast } from "./hooks/useGetForecast";

import "./styles.css";
export function ListCities({ data }: Omit<GeoDBCityResponse, "metadata">) {
  const {getForecast} = useGetForecast()

  const handleSelectedCity = async ({latitude, longitude}:GeoData) => {
    await getForecast(latitude, longitude);
  }
  return (
    <ol className="list-cities">
      {data.map((cities) => (
        <li key={cities.id} >
          <button type="button" onClick={() => handleSelectedCity(cities)}>
           {cities.city}, {cities.regionCode}
          </button>
        </li>
      ))}
    </ol>
  );
}