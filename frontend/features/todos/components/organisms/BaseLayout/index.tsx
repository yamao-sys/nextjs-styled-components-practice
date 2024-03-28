import { ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/organisms/Container';
import { ContentWrapper } from '@/components/organisms/ContentWrapper';
import { TodoNavigationHeader } from '../../molecules/TodoNavigationHeader';

type Props = {
	title: string;
	children: ReactNode;
};

export const BaseLayout = ({ title, children }: Props) => {
	return (
		<>
			<Container>
				<TodoNavigationHeader />
				<Title>{title}</Title>
				<ContentWrapper>{children}</ContentWrapper>
			</Container>
		</>
	);
};

const Title = styled.h1`
	margin-top: 40px;
	text-align: center;
`;
