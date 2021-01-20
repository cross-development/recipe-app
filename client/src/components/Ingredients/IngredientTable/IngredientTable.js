//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledList,
	StyledListItem,
	StyledItemLink,
	StyledImg,
	StyledTitle,
	StyledCategory,
} from './IngredientTable.styles';

const IngredientTable = ({ ingredients = [], location = {} }) => (
	<StyledList>
		{ingredients.map(({ _id, name, category }) => (
			<StyledListItem key={_id}>
				<StyledItemLink
					to={{
						pathname: `/ingredients/${_id}`,
						state: { from: location },
					}}
				>
					<StyledImg />
					<StyledTitle>{name}</StyledTitle>
					<StyledCategory>Категория: {category}</StyledCategory>
				</StyledItemLink>
			</StyledListItem>
		))}
	</StyledList>
);

IngredientTable.propTypes = {
	ingredients: PropTypes.array,
	location: PropTypes.object,
};

export default IngredientTable;
