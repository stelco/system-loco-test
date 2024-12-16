import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Device from './Device';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(Axios);
mock.onGet('https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/72308628872413411').reply(200, {
  id: '72308628872413411',
  name: 'Office Tag',
  model: { name: 'LTR-HGR4-1-1' },
  lastReportTime: '2024-05-24T22:34:44.178+00:00',
  nextReportTime: '2024-05-24T22:49:44.178+00:00',
});

export default {
  title: 'Components/Device',
  component: Device,
} as Meta<typeof Device>;

const Template: StoryFn<typeof Device> = (args: any) => (
  <Router>
    <Routes>
      <Route path="/devices/:deviceId" element={<Device {...args} />} />
    </Routes>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  deviceId: '72308628872413411',
};

export {};