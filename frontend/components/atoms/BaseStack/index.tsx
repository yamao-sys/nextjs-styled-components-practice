'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
	children: ReactNode;
};

export function BaseStack({ children }: Props) {
	return <Stack>{children}</Stack>;
}

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
