import useEventListener from '@use-it/event-listener';
import React, { useState } from 'react';  
import { EDirection } from '../../settings/constants';
import { handleNextPosition, checkValidMovement } from '../../contexts/canvas/helpers';
  
function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);    
  const [direction, updateDirectionState] = useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    if (direction.indexOf("Arrow") === -1 ) {
      return;
    }

    const nextPosition = handleNextPosition(direction, positionState);
    
    const isValidMovement = checkValidMovement(nextPosition);

    if (isValidMovement) {
      updatePositionState(nextPosition);
      updateDirectionState(direction);
    }
    
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;

