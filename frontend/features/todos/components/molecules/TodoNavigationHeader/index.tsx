'use client';

import { NavigationLink } from '@/components/atoms/NavigationLink';
import styled from 'styled-components';

export const TodoNavigationHeader = () => {
	return (
		<Wrapper>
			<NavigationLink
				href="/todos"
				title="TOP"
				backgroundColor="#32b7f0"
				hoveredBackgroundColor="#87ceeb"
			/>
			<NavigationLink
				href="/todos/new"
				title="新規作成"
				backgroundColor="#32b7f0"
				hoveredBackgroundColor="#87ceeb"
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;
