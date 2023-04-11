import React from 'react'
import * as S from './style'
function Skeleton() {
  return (
    <div>
      <S.SkeletonBlock></S.SkeletonBlock>
      <S.SkeletonBlock></S.SkeletonBlock>
      <S.SkeletonBlock></S.SkeletonBlock>
    </div>
  )
}

export default Skeleton