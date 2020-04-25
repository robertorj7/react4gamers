import useInterval from '@use-it/interval';
import React, { useState } from 'react';  
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';
  
function useEnemyMovement(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);    
  const [direction, updateDirectionState] = useState(EDirection.RIGHT);


  useInterval(function move() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let directionArray = Object.values(EDirection);
    const randomDirection = directionArray[randomNumber];

    const nextMovement = handleNextPosition(randomDirection, positionState);

    updateDirectionState(randomDirection);
    updatePositionState(nextMovement);

  }, 1000);
  

  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMovement;

