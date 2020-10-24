import Image from "./models/Image.js"
import Todo from "./Models/Todo.js"
import Weather from "./models/Weather.js"
import Quote from "./models/Quote.js"
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
