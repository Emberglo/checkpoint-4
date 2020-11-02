import { ProxyState } from "../AppState.js";
import clockService from "../Services/ClockService.js";

// function _drawClock() {
//     let template = ''
//     template += ProxyState.clock.ClockTemplate
//     document.getElementById('clockContainer').innerHTML = template
// }

export default class ClockController { 
    constructor() {
        // ProxyState.on("clock", _drawClock)
        // _drawClock()
        this.runClock()
    }

    runClock() {
        try {
            clockService.runClock()
        }
        catch (e) {
            console.error(e)
        }
    }

}