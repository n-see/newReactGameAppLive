import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b83be11fa26e4b678678642dcbf2c1f1'
    }
})