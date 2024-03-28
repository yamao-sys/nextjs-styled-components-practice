'use client';

import { FetchAllTodosResponseDto } from '@/api/todos/@types';
import { deleteTodo } from '@/features/todos/server_actions/deleteTodo';
import { useState } from 'react';
import { BaseLayout } from '../BaseLayout';
import styled from 'styled-components';
import { NavigationLink } from '@/components/atoms/NavigationLink';

type Props = {
	todos: FetchAllTodosResponseDto['todos'];
};

export function TodoList({ todos }: Props) {
	const [showTodos, setShowTodos] =
		useState<FetchAllTodosResponseDto['todos']>(todos);

	const handleDeleteTodo = async (id: string, title: string) => {
		if (!window.confirm(`${title}のTODOを削除しますか？`)) return;

		await deleteTodo(id);
		window.alert(`${title}のTODOを削除しました。`);

		const newTodos = todos?.filter((todo) => todo.id !== id) || [];
		setShowTodos(newTodos);
	};

	return (
		<>
			<BaseLayout title="Todoリスト">
				{!!showTodos?.length ? (
					showTodos.map((todo) => (
						<TodoRow key={todo.id}>
							<TodoTitleWrapper>
								<TodoTitle>{todo.title}</TodoTitle>
							</TodoTitleWrapper>
							<ButtonsWrapper>
								<NavigationLink
									href={`/todos/edit/${todo.id}`}
									title="編集"
									width="80px"
									backgroundColor="#66cc33"
									hoveredBackgroundColor="#66cc66"
								/>
								<DeleteButton
									onClick={() => handleDeleteTodo(todo.id, todo.title)}
								>
									削除
								</DeleteButton>
							</ButtonsWrapper>
						</TodoRow>
					))
				) : (
					<NotExistsTodosNotion>※ まだTODOが未登録です</NotExistsTodosNotion>
				)}
			</BaseLayout>
		</>
	);
}

const NotExistsTodosNotion = styled.span`
	font-weight: 700;
`;

const TodoRow = styled.div`
	display: flex;
	width: 100%;
	padding: 20px;
	border: 1px solid #66ccff;
	border-radius: 10px;
`;

const TodoTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
`;

const TodoTitle = styled.span`
	display: block;
	font-weight: 700;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: end;
	width: 50%;
`;

const DeleteButton = styled.button`
	display: block;
	width: 80px;
	height: 40px;
	background-color: #ff6666;
	border: none;
	outline: none;
	margin-left: 10px;
	padding: 10px;
	font-size: 16px;
	font-weight: 700;
	color: #fff;
	appearance: none;
	border-radius: 10px;
	transition: 0.3s;

	&:hover {
		background-color: #cc6666;
	}
`;
