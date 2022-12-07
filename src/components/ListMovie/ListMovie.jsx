import { poster } from "services/Services";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import { Wrapp, List, Item, Image, Text } from "components/TrendingMovies/TrendingMoviesStyled";

const ListMovie = ({ movies }) => {
    const location = useLocation();

    return (
        <Wrapp>
            {movies.length > 0 && (
                <List>
                    {movies.map(({id, title, backdrop_path}) => 
                        <Item key={id}>
                            <Link to={`${id}`} state={{ from: location}}>
                                <Image src={poster + backdrop_path} alt='' />
                                <Text>{title}</Text>
                            </Link>
                        </Item>
                    )}
                </List>)
            }
        </Wrapp>
    )
}

export default ListMovie;

ListMovie.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            backdrop_path: PropTypes.string.isRequired,
        })
    )
}