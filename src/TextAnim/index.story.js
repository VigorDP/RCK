import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { TextyAnim } from './index';

const text = '平台拥有丰富的各类首页模板';

const Demo = (
  <TextyAnim
    type="mask-top"
    onEnd={type => {
      console.log(type);
    }}
  >
    {text}
  </TextyAnim>
);
storiesOf('组件列表|TextyAnim', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);
