import ImageController from "./Controllers/ImageController.js"
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController.js"
import ClockController from "./Controllers/ClockController.js"


class App {
  constructor() {
    this.imageController = new ImageController()
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController()
    this.clockController = new ClockController()
  }

}


window["app"] = new App();