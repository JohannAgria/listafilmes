import axios from "axios";


//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=68abac2b9ff4db1e0004a54a8ada4eda&language=pt-BR&region=BR&page=1
//BASE URL: https://api.themoviedb.org/3/


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api