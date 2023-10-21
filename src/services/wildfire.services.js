import axios from "axios";

class Wildfireservice {
    constructor() {
        this.api = axios.create({
            baseURL: `https://analisis.datosabiertos.jcyl.es/api/explore/v2.1`
        })
    }

    getWildfireData() {
        return this.api.get(`/catalog/datasets/incendios-forestales/exports/json`)
    }
}

const wildfireService = new Wildfireservice()

export default wildfireService