import { GeoDBCityResponse, GeoData } from "../../model/GeoDbApiModel";
import { useGetForecast } from "./hooks/useGetForecast";

export function ListCities({ data }: Omit<GeoDBCityResponse, "metadata">) {
  const {getForecast} = useGetForecast()

  const handleSelectedCity = ({latitude, longitude}:GeoData) => {
    getForecast(latitude, longitude);
  }
  return (
    <ol>
      {data.map((cities) => (
        <li key={cities.id}>
          <button type="button" onClick={() => handleSelectedCity(cities)}>
           {cities.city}, {cities.regionCode}
          </button>
        </li>
      ))}
    </ol>
  );
}