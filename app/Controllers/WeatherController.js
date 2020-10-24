import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

function _drawWeather() {
  let template = ''
  template += ProxyState.weather.WeatherTemplate
  document.getElementById('weather').innerHTML = template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
}
