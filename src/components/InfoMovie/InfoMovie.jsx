import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import { poster } from "services/Services";

import { Wrapp, BtnLink, ItemWrapp, Image, HeadTitle, Description, Text, Info, Titel, Nav, NavItem } from "./InfoMovieStyled";

const InfoMovie = ({item}) => {
    const { poster_path, title, release_date, overview, vote_average, genres } = item;
    const date = new Date(release_date);
    const location = useLocation();

    const navItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews'}
    ]
    
    return (
            <Wrapp>
                <BtnLink to={location.state?.from ?? '/'} ><BsArrowLeft size='25' />Go back</BtnLink>
                <ItemWrapp>
                    <div>
                        <Image src={poster + poster_path} alt="" />
                    </div>
                    <div>
                        <HeadTitle>{title} ({date.getFullYear()})</HeadTitle>
                        <Description>User score: {vote_average.toFixed(1) * 10}%</Description>
                        <Titel>Overview</Titel>
                        <Description>{overview}</Description>
                        <Titel>Genres</Titel>
                        <Text>
                            {genres.map(({ id, name }) => <span key={id}>{ name }</span>)}
                        </Text>
                    </div>
                </ItemWrapp>
                <Info>
                <Titel>Additional information</Titel>
                <Nav>
                    {navItems.map(({ href, text }) => 
                        <NavItem key={href} to={href} state={{ from: location.state?.from ?? '/'}}>{text}</NavItem>
                    )}
                </Nav>
                </Info>
            </Wrapp>
        
    )
}

export default InfoMovie; 

InfoMovie.propTypes = {
    item: PropTypes.oneOfType([
        PropTypes.shape({
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            vote_average: PropTypes.string.isRequired,
            genres: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                })
            )
        })
    ])
}