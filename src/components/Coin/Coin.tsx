import React from 'react';
import { FC } from 'react';

// local imports
import { COIN, HEAD, TAIL } from '../../constants';
import CoinSide from '../CoinSide/CoinSide';

import './style.css';

export interface Props {
  isHead: boolean;
  isAnimation: boolean;
  animationEndHandler?: () => void;
  diameter?: number;
}
const Coin: FC<Props> = ({
  isHead,
  isAnimation,
  animationEndHandler,
  diameter,
}) => {
  React.useEffect(() => {
    if (diameter) {
      document.documentElement.style.setProperty(
        '--coin-diameter',
        `${diameter}px`
      );
    }
  }, [diameter]);

  const positions = isHead ? HEAD : TAIL;

  const classNames = isAnimation ? 'coin coin__anim' : 'coin';

  const animationHandler = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (animationEndHandler && event.animationName === 'shine') {
      animationEndHandler();
    }
  };

  return (
    <div className={classNames} onAnimationEnd={animationHandler}>
      {positions.map((position, index) => (
        <CoinSide
          key={position}
          side={COIN[index]}
          position={position}
          isAnimation={isAnimation}
        />
      ))}
      <div className="edge"></div>
    </div>
  );
};

export default Coin;
