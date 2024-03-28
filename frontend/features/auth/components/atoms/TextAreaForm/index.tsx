import styled from 'styled-components';

type Props = JSX.IntrinsicElements['textarea'];

export const TextAreaForm = ({ name, placeholder, value, onChange }: Props) => {
	return (
		<Wrapper>
			<TextArea
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 75%;
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 100px;
	border-radius: 8px;
	border: 1px solid #707070;
	outline: none;
	padding: 10px;
	font-size: 20px;
	resize: none;

	::placeholder {
		color: #f5f5f5;
	}
`;
