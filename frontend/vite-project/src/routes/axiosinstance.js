import axios from "axios"

export const AxiosInstance =axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    withCredentails:true
})

 // withCredentail :true
   // baseURL:"http://localhost:5000"

// to store cookies we need to true the with crendentials