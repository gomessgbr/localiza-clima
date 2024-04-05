import { useEffect, useState } from "react";
import { GEO_DB_CITIES_API_URL, RAPID_API_KEY } from "../../../api/api";
import { GeoDBCityResponse } from "../../../model/GeoDbApiModel";



export function useGetLocale() {

  const [locale, setLocale] = useState<GeoDBCityResponse | null>(null);
  const getLocale = async (citieName : string) => {
      const response = await fetch(`${GEO_DB_CITIES_API_URL}/cities?minPopulation=1000000&namePrefix=${citieName}`, {
        headers: {
          'X-RapidAPI-Key' : `${RAPID_API_KEY}`,
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      })

      const responseJson = await response.json();
      setLocale(responseJson);
      return
  }



  return {
    locale,
    getLocale
  }
}