import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import { getInfoMovie } from "services/Services";

import InfoMovie from "components/InfoMovie";

const MoviesDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
    getInfoMovie(movieId).then(data => setMovie(data))
    }, [movieId]);
    
    return (
        <>
            {movie && <>
                <InfoMovie item={movie} />
                <Outlet />
            </>}
        </>
        
    )
}

export default MoviesDetails;