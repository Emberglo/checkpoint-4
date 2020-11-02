import Image from "./Models/Image.js"
import Todo from "./Models/Todo.js"
import Weather from "./Models/Weather.js"
import Quote from "./Models/Quote.js"
import Clock from "./Models/Clock.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /**@type { Image }*/
  image = null
  
  /** @type {Todo[]} */
  todos = []

  /** @type {Weather} */
  weather = null

/** @type {Quote} */
  quote = null

/** @type {Clock}*/
  clock = new Clock
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
