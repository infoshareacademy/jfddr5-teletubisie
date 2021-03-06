import styled from "styled-components";
import { PageLayout } from "../components/PageLayout";
import { Main } from "../components/Main";
import "../styles.css";
import { NavLink } from "react-router-dom";
import { FullCalendarApp } from "../components/FullCalendarApp";

export const Calendar = () => {
	const StyledNavigation = styled.div`
		width: 25%;
		display: flex;
		flex-direction: column;
	`;

	return (
		<PageLayout>
			<FullCalendarApp />

			<NavLink to="/navigation"></NavLink>
		</PageLayout>
	);
};
