import React from 'react';
import * as S from './style'
function Priority({order, setOrder}) {

  const handleChangeOrder = (e) => {
    console.log(e);
    setOrder(Number(e.target.value));
  };

  return (
    <S.Priority>
      <S.PriorityLabel value={1}>
        <S.PriorityInput type="radio" name="priority" value={1} checked={order === 1} onChange={handleChangeOrder} />
        <S.PriorityMarker checked={order === 1} />
      </S.PriorityLabel>
      <S.PriorityLabel value={2}>
        <S.PriorityInput type="radio" name="priority" value={2} checked={order === 2} onChange={handleChangeOrder} />
        <S.PriorityMarker checked={order === 2} />
      </S.PriorityLabel>
      <S.PriorityLabel value={3}>
        <S.PriorityInput type="radio" name="priority" value={3} checked={order === 3} onChange={handleChangeOrder} />
        <S.PriorityMarker checked={order === 3} />
      </S.PriorityLabel>
    </S.Priority>
  );
}

export default Priority;
