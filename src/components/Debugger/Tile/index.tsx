import React from 'react';
import { TILE_SIZE } from '../../../settings/constants';

interface IProps {
  position: { x: number, y: number };
  text: number;
}

function Tile(props: IProps) {
  function getTileColor() {
    switch(props.text) {
      case 0:
        return 'white';
      case 1:
        return 'red';
    }
  }

  const color = getTileColor();

  return (
    <div style={{ 
      position: 'absolute',
      left: TILE_SIZE * props.position.x,
      top: TILE_SIZE * props.position.y,
      width: TILE_SIZE, 
      height: TILE_SIZE, 
      border: `2px solid ${color}`,
      color: color
    }}>
      {props.text}
    </div>
  )
}

export default Tile;