import { useEffect } from "react";
import { FormComponent } from "../../components";
import { Forecast } from "../../components/Forecast/Forecast";
import { useGetForecast } from "../../components/ListCities/hooks/useGetForecast";

import './styles.css'
export function Home(){
  // const {forecast} = useGetForecast()

  return (
    <div className="App">
      <div className="main-square">
        <h1>Localiza Clima</h1>
        <FormComponent title="Insira a Cidade"/>
           {/* <Forecast  /> */}
      </div>
    </div>
  )
}