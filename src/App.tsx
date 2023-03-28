import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface IWeatherData {
  city: string;
  temp: number;
  humidity: string;
  wind_speedy: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [cityId, setCityId] = useState<number>();
  const apiTokenClimaTempo = "81c646284ba8db771b347f054a6d8dcd";

  async function fetchWeatherData(city: string) {
    const apiKey = "573fcb64c8edd271cff36e292610168d";
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function fetchCityId() {
    try {
      const response = await axios.get(
        "http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=São Paulo&state=SP&token=81c646284ba8db771b347f054a6d8dcd"
      );
      console.log(response.data[0].id);

      // if (response) fetchWeatherClimatempo(response.data[0].id);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchWeatherClimatempo() {
    try {
      const response = await axios.get(
        `http://apiadvisor.climatempo.com.br/api/v1/climate/temperature`,
        {
          params: {
            id: 3477,
            token: apiTokenClimaTempo,
          },
        }
      );
      console.log(response.data.id);
    } catch (e) {
      console.log(e);
    }
  }
  //TODO É preciso registrar o id na cidade
  async function registreMyTokenToIdCity() {
    let localeId: [number];
    localeId.push(3744);
    try {
      ("http://apiadvisor.climatempo.com.br/api-manager/user-token/:your-app-token/locales");
      const response = await axios.put(
        `http://apiadvisor.climatempo.com.br/api-manager/user-token/${apiTokenClimaTempo}/locale`,
        {
          localeId,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      console.log(response);
    } catch (e) {
      console.log("Deu ruim padrin", e);
    }
  }

  return (
    <div className="App">
      <div className="main-square">
        <p>Hello World</p>
        <input type="search" name="" id="" placeholder="Insira a cidade" />
        <input
          type="button"
          value="Procurar Cidade"
          onClick={() => registreMyTokenToIdCity()}
        />
      </div>
    </div>
  );
}

export default App;
