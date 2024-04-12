import { Card, FormComponent } from "../../components";

import "./styles.css";
export function Home() {
  // const {forecast} = useGetForecast()

  return (
    <div className="main">
      <div className="main-square">
        {/* <h1>Localiza Clima</h1> */}
        {/* <FormComponent title="Insira a Cidade"/> */}
        <Card
          location="São Paulo"
          currently="23"
          icon="https://openweathermap.org/img/wn/01d@2x.png"
          max="30"
          min="20"
          description="Partialmente nublado"
        />
      </div>
    </div>
  );
}
