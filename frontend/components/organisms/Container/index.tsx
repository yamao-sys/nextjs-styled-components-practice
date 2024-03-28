import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
	children: ReactNode;
};

export const Container = ({ children }: Props) => {
	return (
		<>
			<ContainerWrapper>{children}</ContainerWrapper>
		</>
	);
};

const ContainerWrapper = styled.div`
	width: 50%;
	margin: 80px auto;
`;
