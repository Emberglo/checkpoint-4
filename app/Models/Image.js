export default class Image {

    constructor(data) {
        this.url = data.large_url || data.url
        this.credit = data.site
    }

    get CreditTemplate() {
        return /*html*/`
        <div>
            <p class="m-0">${this.credit}</p>
        </div>
        `
    }

}