import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
	children: ReactNode;
};

export const ContentWrapper = ({ children }: Props) => {
	return (
		<>
			<Wrapper>{children}</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	gap: 30px;
`;
