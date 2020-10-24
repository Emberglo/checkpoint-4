export default class Weather {

  constructor(data) {
    this.city = data.name
    this.kelvin = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32)
    this.icon = data.weather.icon
  }

  get WeatherTemplate() {
    return /*html*/`
    <div>
        <h5>${this.city}</h5>
        <!-- <img src='http:www.openweathermap.org/img/w/'${this.icon}'.png' alt=""> -->
        <h5>${this.kelvin} °F</h5>
    </div>
    `
  }

}