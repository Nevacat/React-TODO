import React, { useEffect, useState } from 'react';
import Btn from '../../components/common/Btn';
import { useNavigate } from 'react-router-dom';
import Task from '../../components/Task';
import * as S from './style';
import { getTodos, deleteTodo } from '../../api/axios';
import { useQuery } from 'react-query';
import Skeleton from '../../components/Skeleton';
import BackLogs from '../../components/BackLogs';
import Completed from '../../components/Completed';

function Note() {
  const navigate = useNavigate();
  const handleNew = () => {
    navigate('/newNote');
  };

  return (
    <div>
      <S.Title>BACKLOGS</S.Title>
      <S.Tasks>
        <BackLogs/>
      </S.Tasks>
      <Btn name={'New'} onClick={handleNew} />
      <S.Title>COMPLETED TASKS</S.Title>
      <S.Tasks>
        <Completed/>
      </S.Tasks>
    </div>
  );
}

export default Note;
