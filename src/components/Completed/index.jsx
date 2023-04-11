import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getTodos } from '../../api/axios';
import Skeleton from '../Skeleton';
import Task from '../Task';

function Completed() {
  const {
    data: todos,
    isLoading,
    isFetching,
  } = useQuery('todos', getTodos, {
    select: (todos)=>todos?.filter((todo) => todo.done),
  });

  return (
    <div>
      {isLoading || isFetching ? (
        <Skeleton />
      ) : (
        todos && todos.map((todo) => <Task data={todo}/>)
      )}
    </div>
  );
}

export default Completed;
