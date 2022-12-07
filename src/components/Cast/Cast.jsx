import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getActorMovie, poster } from '../../services/Services';

import { Wrapp, List, Image, Text } from "./CastStyled";
import notAva from './image/noAva.jpeg';

const Cast = () => {
    const [casts, setCasts] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getActorMovie(movieId).then(data => setCasts(data))
    }, [movieId])

    return (
        <Wrapp>
            {casts && 
                <List>
                {casts.map(({ id, name, profile_path }) => 
                    <li key={id}>
                        <Image src={profile_path !== null ? poster + profile_path : notAva} alt='' />
                        <Text>{name}</Text>
                    </li>
                )}
            </List>
            }
        </Wrapp>
    )
}

export default Cast;