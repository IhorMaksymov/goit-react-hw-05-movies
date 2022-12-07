import { Formik } from "formik";
import { BiSearch } from "react-icons/bi";
import PropTypes from 'prop-types';

import { Wrapp, FieldForm, Input, Button } from "./SearchBarStyled";

const SearchBar = ({movieName}) => {

    const handleSubmit = (value, { resetForm }) => {
        movieName(value);
        resetForm();
    }

    return (
        <Wrapp>
            <Formik
                initialValues={{ movie: '' }}
                onSubmit={handleSubmit}
            >
                <FieldForm autoComplete='off'>
                    <Input
                        type='text'
                        name='movie'
                        placeholder='Enter the title of the movie'
                    />
                    <Button type='submit'><BiSearch size='20'/></Button>
                </FieldForm>
            </Formik>
        </Wrapp>
    )
}

export default SearchBar;

SearchBar.propTypes = {
    movieName: PropTypes.func.isRequired,
}