import styled from 'styled-components';

type Props = JSX.IntrinsicElements['button'];

export const BaseButton = ({ title, onClick }: Props) => {
	return <Button onClick={onClick}>{title}</Button>;
};

const Button = styled.button`
	display: block;
	width: 75%;
	background-color: #32b7f0;
	border: none;
	cursol: pointer;
	outline: none;
	padding: 10px;
	font-size: 24px;
	font-weight: 700;
	color: #fff;
	appearance: none;
	border-radius: 10px;
	transition: 0.3s;

	&:hover {
		background-color: #8fe2fc;
	}
`;
