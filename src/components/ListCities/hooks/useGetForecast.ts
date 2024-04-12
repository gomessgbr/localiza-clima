import { useState } from "react";

import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from "../../../api/api";
import { ForecastAPIResponse } from "../../../model";

export function useGetForecast() {
  const [forecast, setForecast] = useState<ForecastAPIResponse | null>(null);
  const getForecast = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
      );
      const responseJson = await response.json();
      setForecast(responseJson);
      return;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getForecast,
    forecast,
  };
}
