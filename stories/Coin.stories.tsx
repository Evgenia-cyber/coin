import React from 'react';
import { Meta, Story } from '@storybook/react';

// local imports
import Coin, { Props } from '../src/components/Coin/Coin';

const meta: Meta = {
  title: 'Coin',
  component: Coin,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Coin {...args} />;
// const Template: Story<Props> = (args) => <Coin {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Head = Template.bind({});
Head.args = {
  isHead: true,
  isAnimation: false,
  animationEndHandler: () => {
    alert("Animation ended (head)");
  },
};

export const Tail = Template.bind({});
Tail.args = {
  isHead: false,
  isAnimation: false,
  animationEndHandler: () => {
    alert("Animation ended (tail)");
  },
};
