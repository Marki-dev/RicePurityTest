import { useEffect, useState } from "react";
import ThykeFetch from "../../util/fetch";

export default function MovieSection() {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/movies").then(res => res.json()).then(setMovies)
    }, [])
    return (
        <div className="text-center flex items-center justify-center flex-col">
            <p className="text-3xl font-black">Movies I am watching</p>
            <div className="flex items-center justify-center w-5/6">
                <div className="flex flex-col md:flex-row gap-5 overflow-x-scroll bg-scroll p-10">
                    {movies?.map((movie, i) => <MovieCard key={i} movie={movie} />)}
                </div>
            </div>
        </div>
    )
}

function MovieCard({ movie }: { movie: any }) {
    const [movieData, setMovieData] = useState<any>(null);
    useEffect(() => {
        fetch(`/api/movies/${movie.id}`).then(r => r.json()).then(setMovieData)
    }, [movie.id])
    console.log()
    return <div className="hover:scale-105 duration-300 group flex items-center justify-center my-5">
        <div className="relative h-[60vh]  rounded-lg">
            <img src={movie.backdrop} className="object-cover  duration-300 group-hover:object-bottom w-full h-full rounded-lg" />
            <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-black/70 to-violet-700/70 rounded-lg flex flex-col items-center justify-center text-center">
                <p className="text-2xl font-bold px-14 text-gray-300 mt-3">
                    {movie.name}
                </p>
                <p className="text-lg px-14 text-gray-300 mt-10">
                    {movieData?.Overview?.slice(0, 150)}...
                </p>
                <p className="text-sm font-light px-14 text-gray-300 ">
                    {/* 
                        // @ts-ignore */}
                    <div className="radial-progress" style={{ "--value": movie.stats.playPosition }}>{Math.floor(movie.stats.playPosition)}%</div>
                </p>
            </div>
        </div>
    </div >
}