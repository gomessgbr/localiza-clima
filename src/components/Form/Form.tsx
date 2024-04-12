import { FormEvent, useEffect, useId } from "react";

import { useGetLocale } from "./hooks/useGetLocale";
import { ListCities } from "../ListCities/ListCities";

import { useGetForecast } from "../ListCities/hooks/useGetForecast";
import { Card } from "../Card/Card";

import "./styles.css";

interface IFormProps {
  title: string;
}
export function FormComponent({ title }: IFormProps) {
  const id = useId();
  const { locale, getLocale } = useGetLocale();
  const { forecast, getForecast } = useGetForecast();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputElement = event.currentTarget.elements[0] as HTMLInputElement;
    await getLocale(inputElement.value);
  }
  return (
    <>
      <h1>Localiza Clima</h1>
      <form id={id} className="form-area" onSubmit={handleSubmit}>
        <label id={id}>
          {title}
          <input type="text" id={id} name="cityForm" min={1} maxLength={50} />
        </label>
        <button form={id} type="submit">
          Pesquisar
        </button>
      </form>

      {locale && locale.data.length > 0 && !forecast && (
        <ListCities
          geoDbCity={locale}
          onSubmit={({ latitude, longitude }) =>
            getForecast(latitude, longitude)
          }
        />
      )}
      {forecast && (
        <Card
          location={forecast.name}
          currently={forecast.main.temp}
          icon={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
          max={forecast.main.temp_max}
          min={forecast.main.temp_min}
          description={forecast.weather[0].description}
        />
      )}
    </>
  );
}
