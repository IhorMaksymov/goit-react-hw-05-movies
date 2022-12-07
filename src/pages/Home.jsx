import { useEffect, useState } from "react";

import { getTrendingMovies } from "services/Services";
import TrendingMovies from "components/TrendingMovies";

const Home = () => {
    const [trending, setTrending] = useState([]);
    
    useEffect(() => {
        getTrendingMovies().then(data => setTrending(data));
    }, []);

    return (
        <TrendingMovies trending={trending}/>
    )
}

export default Home;