import useInterval from '@use-it/interval';
import React from 'react';  
import { EDirection, ECharacter } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
  
function useEnemyMovement(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const [positionState, updatePositionState] = React.useState(initialPosition);    
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);


  useInterval(function move() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let directionArray = Object.values(EDirection);
    const randomDirection = directionArray[randomNumber];

    const movement = canvasContext.updateCanvas(randomDirection, positionState, ECharacter.ENEMY);    

    if (movement.nextMove.valid) {
      updateDirectionState(randomDirection);
      updatePositionState(movement.nextPosition);
    }

  }, 1000);
  

  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMovement;

