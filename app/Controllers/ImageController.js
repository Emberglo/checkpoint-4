import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController { 
    
    _drawImageCredit() {
        let template = ''
        template += ProxyState.image.CreditTemplate
        document.getElementById('imgCredit').innerHTML = template
    }

    constructor() {
        ProxyState.on("image", this._drawImageCredit)
        this.getImage()
    }

    getImage() {
        try {
            imageService.getImage()
        }
        catch (e) {
            console.error(e)
        }
    }

}