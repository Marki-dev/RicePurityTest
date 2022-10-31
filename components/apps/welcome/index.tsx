import { useEffect, useState } from "react";

export default function WelcomeApp() {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/movies").then(res => res.json()).then(setMovies)
    }, [])
    return (
        <div className="">
            
        </div>
    )
}