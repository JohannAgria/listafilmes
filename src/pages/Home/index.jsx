import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "68abac2b9ff4db1e0004a54a8ada4eda",
                    language: "pt-BR",
                    page: "1",
                }
            })

            setFilmes(response.data.results.slice(0,6))
            setLoading(false);
        }

        loadFilmes();
    }, [])

    if(loading) {
        return (
            <div className="loading">
                <h1>Carregando filmes...</h1>
            </div>
        )
    }


    return(
        <div>
            <div className="contaiener">
                <div className="lista-filmes">
                    {filmes.map((filme) => {
                        return (
                            <article key={filme.id}>
                                <strong>{filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}