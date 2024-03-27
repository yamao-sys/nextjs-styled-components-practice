import styled from 'styled-components';

type Props = {
	messages: String[];
};

export const ValidationErrorBox = ({ messages }: Props) => {
	return (
		<Wrapper>
			{messages.map((message, i) => (
				<Text key={i}>{message}</Text>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 75%;
	background-color: #ff9e9c;
	border-radius: 5px;
	padding: 10px;
`;

const Text = styled.p`
	color: #fff;
`;
