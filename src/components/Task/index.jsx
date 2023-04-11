import React, { useState } from 'react';
import * as S from './style';
import { deleteTodo, getTodos, updateTodo } from '../../api/axios';
import { QueryCache, useMutation, useQueryClient } from 'react-query';

function Task({ data }) {
  const {id, title, done, order} = data
  const queryClient = useQueryClient();
  const {
    mutate: mutateUpdateTodo,
    isLoading,
    isError,
  } = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleClickDone = function () {
    try {
      const updatedTodo = {
        id,
        title,
        done: !done,
      };
      mutateUpdateTodo(updatedTodo);
    } catch (error) {
      console.error(error);
    }
  };

  //DELET TODO
  const {mutate: mutateDeleteTodo} = useMutation(deleteTodo,{
    onSuccess: ()=>{
      queryClient.invalidateQueries('todos')
    }
  })
  const handleDeleteTodo = function(){
    mutateDeleteTodo(id)
  };

  return (
    <S.Task order={order}>
      <S.Title>{title}</S.Title>
      <S.Done onClick={handleClickDone} />
      <S.Delete onClick={handleDeleteTodo} />
    </S.Task>
  );
}

export default Task;
