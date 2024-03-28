import Link from 'next/link';
import styled from 'styled-components';

type CssProps = {
	width?: string;
	backgroundColor?: string;
	hoveredBackgroundColor?: string;
};

type Props = {
	href: string;
	title: string;
	width?: CssProps['width'];
	backgroundColor?: CssProps['backgroundColor'];
	hoveredBackgroundColor?: CssProps['hoveredBackgroundColor'];
};

export const NavigationLink = ({
	href,
	title,
	width,
	backgroundColor,
	hoveredBackgroundColor,
}: Props) => {
	return (
		<>
			<Navigation
				$width={width}
				$backgroundColor={backgroundColor}
				$hoveredBackgroundColor={hoveredBackgroundColor}
				href={href}
			>
				{title}
			</Navigation>
		</>
	);
};

const Navigation = styled(Link)<{
	$width: CssProps['width'];
	$backgroundColor: CssProps['backgroundColor'];
	$hoveredBackgroundColor: CssProps['hoveredBackgroundColor'];
}>`
	display: block;
	width: ${({ $width }) => ($width ? $width : '140px')};
	height: 40px;
	text-align: center;
	padding: 10px 10px;
	background-color: ${({ $backgroundColor }) =>
		$backgroundColor ? $backgroundColor : '#32b7f0'};
	border-radius: 10px;
	font-weight: 700;
	color: #fff;
	transition: 0.3s;

	&:hover {
		background-color: ${({ $hoveredBackgroundColor }) =>
			$hoveredBackgroundColor ? $hoveredBackgroundColor : '#87ceeb'};
	}
`;
