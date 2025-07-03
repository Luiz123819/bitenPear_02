import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
  

import './MovieGrid.css'

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API;


const Home = () => {

    const [topMovies, setTopMovies] = useState([

    ]);
    const getTopRatedMovies = async (url) => {
        const rest = await fetch(url)
        const data = await rest.json()

        setTopMovies(data.results)
    }

    console.log(baseUrl, apiKey)
    useEffect(() => {
        const topRatedUrl = `${baseUrl}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)
    }, [])


    return (
        <div className="container">
            <h2>Melhores filmes:</h2>
            <div className="movies_container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

        </div>
    )


}

export default Home

