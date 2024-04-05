import { FormComponent } from "../../components";

import './styles.css'
export function Home(){
  return (
    <div className="App">
      <div className="main-square">
        <h1>Previsão do Tempo para </h1>
        <FormComponent title="Insira a Cidade"/>
      </div>
    </div>
  )
}