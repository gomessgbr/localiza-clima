import { useEffect, useState } from "react";
import { fetchForecastForSP } from "../../services/ClimaTempoService";
import { ForeCastResponseModel } from "../../model/ForeCastResponseModel";

import './styles.css'
export function Home(){
  const [forecast, setForecast] = useState<ForeCastResponseModel | null>(null);
  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () =>{
    const response = await fetchForecastForSP();
    setForecast(response)
  }


  return (
    <div className="App">
      <div className="main-square">
        <h1>Previsão do Tempo para {forecast?.name}</h1>
        {/* <FormComponent title="Insira a Cidade"/> */}
        <div>
          
          <p>Resumo</p>
          <p>{forecast?.data[0].text_icon.text.pt}</p>
        </div>
        <div>
          <p>Temperatura</p>
          <p>Min: {forecast?.data[0].temperature.min}°</p>
          <p>Max: {forecast?.data[0].temperature.max}°</p>
        </div>
        <div>
          <p>Umidade</p>
          <p>Min: {forecast?.data[0].humidity.min}%</p>
          <p>Max: {forecast?.data[0].humidity.max}%</p>
        </div>
        <div>
          <p>Previsão para os próximos 5 dias</p>
          <div>
          <p>{forecast?.data[0].date_br}</p>
          <p>Min: {forecast?.data[0].temperature.min}°</p>
          <p>Max: {forecast?.data[0].temperature.max}°</p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          

        </div>
      </div>
    </div>
  )
}