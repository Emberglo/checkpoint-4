export default class Quote {

    constructor(data) {
        this.body = data.quote.body
        this.author = data.quote.author
    }

    get QuoteTemplate() {
        return /*html*/`
            <div class="d-flex flex-column">
                <h5>${this.body}</h5>
                <p class="align-self-center">-${this.author}-</p>
            </div>
        `
    }
}