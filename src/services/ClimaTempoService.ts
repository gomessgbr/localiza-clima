import { api } from "../api/api"
import { ForeCastResponseModel } from "../model/ForeCastResponseModel"


export async function fetchForecast(){
  const url = `/api/v1/anl/synoptic/locale/BR?token=${process.env.CLIMA_TEMPO_KEY}`
  const response =  await api.get(url)
  return response.data
}

export async function fetchForecastForSP(){
  const url =  `/api/v1/forecast/locale/3477/days/15?token=${process.env.CLIMA_TEMPO_KEY}`
  const response = await api.get(url)
  return response.data as ForeCastResponseModel
}