import { useEffect, useState } from "react";
import NavBar from "./componets/NavBar";
import Head from "next/head";
import Title from "./componets/Title";
import { Util } from "../util/Util";

export default function Home() {
    const API_KEY = "4288fa22c7d6e2efcbf9b3db1ed013ef";
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const api = async () => {
            const { page, results } = await Util.fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            setMovies(results);
            setLoading(false);
        };
        setTimeout(() => api(), 1000);
    }, []);

    return (
        <div>
            <Title title="Home" />
            <h1>Index</h1>

            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div style={{ height: "300px", overflow: "scroll", backgroundColor: "yellowgreen" }}>
                    {movies.map((movie) => (
                        <div key={movie.id} style={{}}>
                            <h4>{movie.original_title}</h4>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
