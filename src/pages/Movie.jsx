import { useState, useEffect } from "react";
import { Form, useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "..//components/MovieCard";
import "./Movie.css";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const rest = await fetch(url);
    const data = await rest.json();

    setMovie(data);
  };
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US",{
        style:"currency",
        currency:"USD",
    });
    
  }
  useEffect(() => {
    const movieURL = `${baseUrl}${id}?${apiKey}`;

    getMovie(movieURL)
  }, [id]);

  return <div>{
    movie &&(
        <>
        <MovieCard movie={movie} ShowLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
            <h3><BsWallet2 />Orçamento:</h3>
            <p>{formatCurrency( movie.budget )}</p>
        </div>

        <div className="info">
            <h3><BsGraphUp />Receita:</h3>
            <p>{formatCurrency(movie.revenue)}</p>
        </div>

        <div className="info">
            <h3><BsHourglassSplit />Duração:</h3>
            <p>{movie.runtime}Minutos</p>
        </div>

        <div className="info">
            <h3><BsFillFileEarmarkTextFill />Descrição:</h3>
            <p>{movie.overview}</p>
        </div>

        </>
    )}

    </div>;
};

export default Movie;
