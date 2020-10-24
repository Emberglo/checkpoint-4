import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _drawQuote() {
    let template = ''
    template += ProxyState.quote.QuoteTemplate
    document.getElementById('quote').innerHTML = template
}

export default class QuoteController {

    constructor() {
        ProxyState.on("quote", _drawQuote)
        this.getQuote()
    }

    getQuote() {
        try {
            quoteService.getQuote()
        }
        catch (e) {
            console.error(e)
        }
    }
}