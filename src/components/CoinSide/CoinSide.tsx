import React from 'react';
import { FC } from 'react';

// local imports
import { POSITIONS, SIDES } from '../../types';

export interface Props {
  side: SIDES;
  position: POSITIONS;
  isAnimation: boolean;
}

const CoinSide: FC<Props> = ({ side, position, isAnimation }) => {
  const classNames = isAnimation
    ? `side side__${position} ${position}__anim`
    : `side side__${position}`;

  return <div className={classNames}>{side}</div>;
};

export default CoinSide;
