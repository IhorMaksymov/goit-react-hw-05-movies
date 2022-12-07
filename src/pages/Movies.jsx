import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "components/SearchBar";
import ListMovie from "components/ListMovie";

import { getFindMovie } from "services/Services";

const Movies = () => {
    const [list, setList] = useState([]);
    const [searchRequest, setSearchRequest] = useSearchParams();
    const query = searchRequest.get('query') ?? '';

    const hendleInput = ({movie}) => {
        setSearchRequest(movie !== '' ? {query: movie} : {});
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        getFindMovie(query).then(data => setList(data))
    }, [query]);

    return (
        <>
            <SearchBar movieName={hendleInput} />
            <ListMovie movies={list}/>
        </>
    )
}

export default Movies;