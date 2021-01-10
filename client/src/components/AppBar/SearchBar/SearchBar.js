//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import { Notification } from 'components/Commons';
//Styles
import { FaSearch } from 'react-icons/fa';
import { StyledWrap, StyledForm, StyledLabel, StyledInput, StyledButton } from './SearchBar.styles';

const SearchBar = ({ onSubmit }) => {
	const [state, setState] = useState('');
	const [error, setError] = useState(false);

	const handleChange = ({ target: { value } }) => setState(value);

	const handleSubmit = e => {
		e.preventDefault();

		if (!state || state === ' ') {
			return setError(true);
		}

		onSubmit(state);
		setError(false);
		setState('');
	};

	return (
		<StyledWrap>
			<StyledForm onSubmit={handleSubmit}>
				<StyledInput
					type="text"
					value={state}
					autoComplete="off"
					placeholder="Search..."
					onChange={handleChange}
				/>

				<StyledButton type="submit">
					<FaSearch />
					<StyledLabel>Search</StyledLabel>
				</StyledButton>
			</StyledForm>

			{error && <Notification message="Please enter some query" />}
		</StyledWrap>
	);
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
