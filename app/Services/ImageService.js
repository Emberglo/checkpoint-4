import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"
import { api } from "./AxiosService.js";

class ImageService {
    async getImage() {
        let res = await api.get('images');
        ProxyState.image = new Image(res.data);
        this.getBackgroundImage()
    }

    getBackgroundImage() {
        let image = ProxyState.image.url
        document.body.style.backgroundImage = `url(${image})`;
    }


}

const imageService = new ImageService();
export default imageService;