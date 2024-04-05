import { FormEvent, useId, useState } from "react"
import "./styles.css"
import { fetchForecast } from "../../services/ClimaTempoService"
import { api } from "../../api/api"


interface IFormProps {
  title: string
  // onSubmit: MouseEventHandler<HTMLButtonElement>
}
export function FormComponent({title}: IFormProps) {
  const [cityForm, setCityForm]= useState('')
  const id = useId()

  

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchForecast();

  }
  return (
    <>
    <form id={id} className="form-area" onSubmit={handleSubmit} >
      <label id={id}>
          {title}
        <input type="text" id={id} name="cityForm"  min={1} maxLength={50}   />
      </label>
      <button form={id} type="submit" >Submit</button>
    </form>
    </>
  )
}