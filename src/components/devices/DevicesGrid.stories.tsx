import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DevicesGrid from './DevicesGrid';

export default {
  title: 'Components/DevicesGrid',
  component: DevicesGrid,
} as Meta<typeof DevicesGrid>;

const Template: StoryFn<typeof DevicesGrid> = (args: any) => (
  <Router>
    <DevicesGrid {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};

export {};