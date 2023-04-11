import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getTodos } from '../../api/axios';
import Skeleton from '../Skeleton';
import Task from '../Task';

function BackLogs() {
  const {
    data: todos,
    isLoading,
    isFetching,
  } = useQuery('todos', getTodos, {
    select: (todos) => todos?.filter((todo) => !todo?.done),
  });

  return (
    <div>
      {isLoading || isFetching ? (
        <Skeleton />
      ) : (
        todos && todos.map((todo) => <Task key={todo.id} data={todo} />)
      )}
    </div>
  );
}

export default BackLogs;
