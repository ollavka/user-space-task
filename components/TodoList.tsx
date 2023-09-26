'use client';

import { FC, useEffect } from 'react';
import { getTodosByUserId } from '@/api/todos';
import { useFetch } from '@/hooks/useFetch';
import { Todo } from '@/types';
import { Box, Text, Checkbox, Button } from '@chakra-ui/react';
import { Loader } from './Loader';
import toast from 'react-hot-toast';
import { ReloadButton } from './ReloadButton';

type Props = {
  userId: string;
};

export const TodoList: FC<Props> = ({ userId }) => {
  const { data: todos, isLoading, mutate, error } = useFetch<Todo[]>({
    req: () => getTodosByUserId(userId),
    startValue: [],
  });

  const onToggleTodo = (todoId: number) => {
    mutate((prevTodos) => (
      (prevTodos as Todo[]).map(todo => (
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      ))
    ));
  };

  const onToggleAllTodos = () => {
    const nextStatus = (todos as Todo[]).some(todo => !todo.completed); 

    mutate((prevTodos) => (
      (prevTodos as Todo[]).map(todo => ({ 
        ...todo, 
        completed: nextStatus,
      }))
    ));
  }

  useEffect(() => {
    if (!error?.message) {
      return;
    }

    toast.error(error.message);
  }, [error?.message]);

  if (error) {
    return (
      <>
        <Text
          fontSize="2xl"
          fontWeight="600"
          color="red.400"
          mt={10}
        >
          Oops! Something went wrong
        </Text>
        <ReloadButton />
      </>
    )
  }

  if (isLoading) {
    return (
      <Loader text="Preparing todos..." height="40vh" />
    );
  }

  if (!isLoading && (!todos || !todos.length)) {
    return (
      <Text fontSize="4xl" fontWeight="600">
        This user has no todos yet
      </Text>
    );
  }

  return (
    <>
      <Button 
        colorScheme='blue'
        onClick={onToggleAllTodos}
        mb={5}
      >
        Toggle all todos
      </Button>
      <Box>
        {(todos as Todo[]).map((todo) => (
          <Box
            key={todo.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            mb={4}
            display="flex"
            alignItems="center"
          >
            <Checkbox
              isChecked={todo.completed}
              onChange={() => onToggleTodo(todo.id)}
              mr={4}
            />
            <Text
              fontSize="xl"
              textDecoration={todo.completed ? 'line-through' : 'none'}
              color={`gray.${todo.completed ? 400 : 800}`}
            >
              {todo.title}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};