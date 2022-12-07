import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviewMovie } from "services/Services";

import { Wrapp, Item, Title } from "./ReviewsStyled";

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getReviewMovie(movieId).then(data => setReviews(data));
    }, [movieId])

    return (
        <Wrapp>
            {reviews && 
                <ul>
                    {reviews.map(({ id, author, content }) => 
                        <Item key={id}>
                            <Title>{author}</Title>
                            <p>{content}</p>
                        </Item>
                    )}
                </ul>
            }
        </Wrapp>
    )
}

export default Reviews;