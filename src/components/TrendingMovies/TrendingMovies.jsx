import { Link } from "react-router-dom";
import { poster } from "services/Services";
import PropTypes from 'prop-types';

import { Wrapp, List, Item, Image, Text } from "./TrendingMoviesStyled";

const TrendingMovies = ({ trending }) => {

    return (
        <Wrapp>
            {trending && 
                <List>
                    {trending.map(({ id, title, backdrop_path }) => (
                        <Item key={id}>
                            <Link to={`movies/${id}`}>
                                <Image src={poster + backdrop_path} alt='' />
                                <Text>{title}</Text>
                            </Link>
                        </Item>
                    ))}
                </List>
            }
        </Wrapp> 
    )
}

export default TrendingMovies;

TrendingMovies.propTypes = {
    trending: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            backdrop_path: PropTypes.string.isRequired,
        })
    )
}