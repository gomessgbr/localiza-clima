import { useGetForecast } from "../ListCities/hooks/useGetForecast";

export function Forecast() {
  const {forecast} = useGetForecast()
  console.log(forecast)
  return (
    <div className="forecast">
      <h1>Previsão do Tempo para {forecast?.name}</h1>
    </div>
  )
}