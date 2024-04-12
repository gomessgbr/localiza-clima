import {  FormComponent } from "../../components";
import { useGetForecast } from "../../components/ListCities/hooks/useGetForecast";

import "./styles.css";
export function Home() {
  const {forecast} = useGetForecast();

  return (
    <div className="main">
      <div className="main-square">
        <FormComponent title="Insira a Cidade"/>
      </div>
    </div>
  );
}
