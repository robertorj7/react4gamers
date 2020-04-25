import useEventListener from '@use-it/event-listener';
import React, { useState } from 'react';  
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';
  
function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);    
  const [direction, updateDirectionState] = useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    const nextPosition = handleNextPosition(direction, positionState);
    updatePositionState(nextPosition);
    updateDirectionState(direction);
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;

