import useInterval from '@use-it/interval';
import React, { useState } from 'react';  
import { EDirection } from '../../settings/constants';
import { handleNextPosition, checkValidMovement } from '../../contexts/canvas/helpers';
  
function useEnemyMovement(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);    
  const [direction, updateDirectionState] = useState(EDirection.RIGHT);


  useInterval(function move() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let directionArray = Object.values(EDirection);
    const randomDirection = directionArray[randomNumber];

    const nextPosition = handleNextPosition(randomDirection, positionState);
    const isValidMovement = checkValidMovement(nextPosition);

    if (isValidMovement) {
      updateDirectionState(randomDirection);
      updatePositionState(nextPosition);
    }

  }, 1000);
  

  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMovement;

