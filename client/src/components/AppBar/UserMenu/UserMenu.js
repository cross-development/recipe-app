//Core
import React, { useState } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
//Assets
import defaultAvatar from 'assets/defaultAvatar.png';
//Styles
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
	StyledImg,
	StyledMenu,
	StyledName,
	StyledMenuItem,
	StyledMenuLink,
	StyledDropdown,
	StylesContainer,
} from './UserMenu.styles';

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { user = {} } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handleClick = () => setIsOpen(prevState => !prevState);

	const handleSignOutUser = () => dispatch(authOperations.userSighOut());

	return (
		<StylesContainer>
			<StyledImg src={defaultAvatar} />

			<StyledName>{user.username}</StyledName>

			<StyledDropdown onClick={handleClick}>
				{isOpen ? <FaChevronUp /> : <FaChevronDown />}

				{isOpen && (
					<StyledMenu>
						<StyledMenuItem>
							<StyledMenuLink to="/profile">Profile</StyledMenuLink>
						</StyledMenuItem>
						<StyledMenuItem>
							<StyledMenuLink to="/" onClick={handleSignOutUser}>
								Sign Out
							</StyledMenuLink>
						</StyledMenuItem>
					</StyledMenu>
				)}
			</StyledDropdown>
		</StylesContainer>
	);
};

export default UserMenu;
