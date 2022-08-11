import React from 'react';
import { render, screen } from '@testing-library/react';

// local import
import Coin from '../src/components/Coin/Coin';
import { SIDES } from '../src/types';

describe('Coin', () => {
  describe('should be rendered correctly', () => {
    test('head', () => {
      render(
        <Coin
          isHead={true}
          isAnimation={false}
          animationEndHandler={console.log}
        />
      );
      const coin = screen.getByText(SIDES.HEAD);
      expect(coin.classList.contains('side__front')).toBeTruthy();
    });

    test('tail', () => {
      render(
        <Coin
          isHead={false}
          isAnimation={false}
          animationEndHandler={console.log}
        />
      );
      const coin = screen.getByText(SIDES.TAIL);
      expect(coin.classList.contains('side__front')).toBeTruthy();
    });
  });

  describe('should be animated', () => {
    test('animated head', () => {
      const { container } = render(
        <Coin
          isHead={true}
          isAnimation={true}
          animationEndHandler={console.log}
        />
      );
      const coin = container.querySelector('.coin');
      expect(coin!.classList.contains('coin__anim')).toBeTruthy();
    });

    test('not animated head', () => {
      const { container } = render(
        <Coin
          isHead={true}
          isAnimation={false}
          animationEndHandler={console.log}
        />
      );
      const coin = container.querySelector('.coin');
      expect(coin!.classList.contains('coin__anim')).not.toBeTruthy();
    });
  });
});
