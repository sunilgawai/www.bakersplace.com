import axios from "axios"
import storageKeys from "./storageKeys"

const serverURL =
    process.env.NODE_ENV !== "production"
        ? process.env.REACT_APP_SERVER_URL
        : process.env.REACT_APP_SERVER_LIVE_URL

// const serverURL = process.env.REACT_APP_SERVER_LIVE_URL

// const serverURL = process.env.REACT_APP_SERVER_URL
// const serverURL = process.env.REACT_APP_SERVER_LIVE_URL

const http = axios.create({
    baseURL: serverURL + "/api",
})

http.interceptors.request.use((req) => {
    const token = localStorage.getItem(storageKeys.AUTH_TOKEN)
    // const shopCode = localStorage.getItem(storageKeys.SHOP_CODE)
    if (token && req.headers) {
        req.headers.Authorization = `Bearer ${token}`
    }
    // req.headers.shop_code = shopCode
    return req
})

export { http, serverURL }
