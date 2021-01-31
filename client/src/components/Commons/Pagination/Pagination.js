//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ReactPaginate from 'react-paginate';
//Styles
import { StyledWrapper } from './Pagination.styles';

const Pagination = ({ totalPages, onChangePaginate }) => (
	<StyledWrapper>
		<ReactPaginate
			previousLabel={'previous'}
			nextLabel={'next'}
			breakLabel={'...'}
			breakClassName={'break-me'}
			initialPage={0}
			pageCount={totalPages}
			marginPagesDisplayed={2}
			pageRangeDisplayed={5}
			onPageChange={onChangePaginate}
			containerClassName={'pagination'}
			subContainerClassName={'pages pagination'}
			activeClassName={'active'}
		/>
	</StyledWrapper>
);

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	onChangePaginate: PropTypes.func.isRequired,
};

export default Pagination;
