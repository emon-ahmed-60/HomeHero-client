import axios from "axios";

const instance = axios.create({
    // baseURL:"https://home-hero-server-nine.vercel.app"
    baseURL:"http://localhost:3000"
})
const useAxios = () => {
    return instance
};

export default useAxios;