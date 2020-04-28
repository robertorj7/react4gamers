import useEventListener from '@use-it/event-listener';
import React from 'react';  
import { EDirection, ECharacter } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';
  
function useHeroMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const chestsContext = React.useContext(ChestsContext);

  const [positionState, updatePositionState] = React.useState(initialPosition);    
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    if (direction.indexOf("Arrow") === -1 ) {
      return;
    }

    const movement = canvasContext.updateCanvas(direction, positionState, ECharacter.HERO);

    if (movement.nextMove.valid) {
      updatePositionState(movement.nextPosition);
      updateDirectionState(direction);
    }

    if (movement.nextMove.dead) {
      console.log("Você morreu!!!");
    }

    if (movement.nextMove.chest) {
      chestsContext.updateOpenedChests();
    }
    
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;

