import React, { useState } from 'react';
import * as S from './style';
import Btn from '../../components/common/Btn';
import { useMutation, useQueryClient } from 'react-query';
import { createTodo } from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import Priority from '../../components/Priority';

function NewNote() {
  const [title, setTitle] = useState('');
  const [order, setOrder] = useState(1);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateCreateTodo } = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateCreateTodo({ title, order });
    setTitle('');
    setOrder(1);
    navigate('/note');
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <S.NewTask>
      <S.box>
        <S.TaskLabel htmlFor="Name">Name</S.TaskLabel>
        <S.TaskInput type="text" id="Name" value={title} onChange={handleChangeTitle} />
      </S.box>
      <S.box>
        <S.TaskLabel>Priority</S.TaskLabel>
        <Priority order={order} setOrder={setOrder}/>
      </S.box>
      <Btn name={'Add'} onClick={handleSubmit} />
    </S.NewTask>
  );
}

export default NewNote;
