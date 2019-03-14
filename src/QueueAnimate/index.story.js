import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { QueueAnim } from './index';
const Demo = (
  <QueueAnim>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
);
storiesOf('组件列表|QueueAnim', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);
