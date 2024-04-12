import { FormEvent, useId } from "react";

import { useGetLocale } from "./hooks/useGetLocale";
import { ListCities } from "../ListCities/ListCities";

import "./styles.css";

interface IFormProps {
  title: string;
}
export function FormComponent({ title }: IFormProps) {
  const id = useId();
  const { locale, getLocale } = useGetLocale();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const inputElement = event.currentTarget.elements[0] as HTMLInputElement;
     await getLocale(inputElement.value);
    event.preventDefault();
  }
  return (
    <>
      <form id={id} className="form-area" onSubmit={handleSubmit}>
        <label id={id}>
          {title}
          <input type="text" id={id} name="cityForm" min={1} maxLength={50} />
        </label>
        <button form={id} type="submit">
          Pesquisar
        </button>
      </form>

      {locale && locale.data.length > 0 && <ListCities data={locale.data} />}
    </>
  );
}
