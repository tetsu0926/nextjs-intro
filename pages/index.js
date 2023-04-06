import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";


const useInput = (init = "") => {
    const [input, setInput] = useState(init);
    const onChange = (event) => {
        setInput(event.target.value);
    }
    const ref = useRef();
    const value = input;
    return {onChange, ref, value};
};

export default function Home({page, results}) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const input = useInput('초기값.');

    useEffect(() => {
        (async () => {
            // const {page, results} = await (await fetch(`/api/movies/popular`)).json();
            // console.log('results', results);
            setMovies(results);
            setLoading(false);
        })();
    }, [input.value]);


    const router = useRouter();
    const detail = (id, title) => {
        // router.push({
        //         pathname: `/movies/${id}`,
        //         query: {
        //             id,
        //             title,
        //         },
        //     },
        //     `/movies/${id}`
        // ).then();
        router.push(`/movies/${title}/${id}`).then();
    };

    return (
        <div>
            {/*<Title title="Home" />*/}
            <h1>Index</h1>


            <input type="text" {...input} />
            <br />
            <br />

            <div style={{height: "600px", overflow: "scroll", backgroundColor: "yellowgreen"}}>
                {movies ? <div className="movie"></div> : null}

                {movies?.map((movie) => (
                    // <Link href={`/movies/${movie.id}`}>
                    <div onClick={() => {
                        detail(movie.id, movie.title)
                    }} className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <h4>{movie.original_title}</h4>
                    </div>
                    // </Link>

                ))}

            </div>

            <style jsx>{`
              .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
              }

              .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .movie:hover img {
                transform: scale(1.05) translateY(-10px);
              }

              .movie h4 {
                font-size: 18px;
                text-align: center;
              }
            `}</style>

        </div>
    );
}


export async function getServerSideProps(ctx) {

    // const API_KEY = "4288fa22c7d6e2efcbf9b3db1ed013ef";
    // const {page, results} = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();

    const idx = ctx.req.rawHeaders.findIndex(req => req === 'Host');
    const host = ctx.req.rawHeaders[idx + 1];

    const {page, results} = await (await fetch(`http://${host}/api/movies/popular`)).json();

    return {
        props: {
            page,
            results,
        }
    }
}
