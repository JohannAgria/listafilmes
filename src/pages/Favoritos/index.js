import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@filmes")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    return (
        <div>
            <h1>Meus filmes</h1>
            <ul>
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filmes.title}</span>

                            <Link to={`filme/${filme.id}`}>Ver detalhes</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}