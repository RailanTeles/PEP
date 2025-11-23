import axios from "axios";

const api = axios.create({
    baseURL: "https://kong-0fb7a2b983usvt2n9.kongcloud.dev",
    headers : {
        'Content-Type' : 'application/json'
    }
})

export default api;