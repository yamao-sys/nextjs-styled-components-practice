'use client';

import styled from 'styled-components';

type Props = {
	type?: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputTextForm({
	type = 'text',
	name,
	placeholder,
	value,
	onChange,
}: Props) {
	return (
		<>
			<Input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</>
	);
}

const Input = styled.input`
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 8px;
	border: 1px solid #707070;
	outline: none;
	padding: 10px;
	font-size: 20px;

	::placeholder {
		color: #f5f5f5;
	}
`;
