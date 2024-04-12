import { GeoDBCityResponse, GeoData } from "../../model/GeoDbApiModel";
import { useGetForecast } from "./hooks/useGetForecast";

import "./styles.css";

interface IListCitiesProps {
  geoDbCity: Omit<GeoDBCityResponse, "metadata">;
  onSubmit: ({latitude, longitude}:GeoData) => void;
}
export function ListCities({onSubmit, geoDbCity}: IListCitiesProps) {
  return (
    <ol className="list-cities">
      {geoDbCity.data.map((cities) => (
        <li key={cities.id} >
          <button type="button" onClick={() => onSubmit(cities)}>
           {cities.city}, {cities.regionCode}
          </button>
        </li>
      ))}
    </ol>
  );
}