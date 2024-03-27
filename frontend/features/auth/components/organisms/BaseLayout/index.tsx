import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
	title: string;
	children: ReactNode;
};

export const BaseLayout = ({ title, children }: Props) => {
	return (
		<>
			<Container>
				<Title>{title}</Title>
				<Wrapper>{children}</Wrapper>
			</Container>
		</>
	);
};

const Container = styled.div`
	width: 50%;
	margin: 80px auto;
`;

const Title = styled.h1`
	text-align: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	gap: 30px;
`;
