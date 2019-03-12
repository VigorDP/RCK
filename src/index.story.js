import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import WelcomeReadme from '../README.md';

storiesOf('使用指南|Guideline', module)
  .addDecorator(withDocs(WelcomeReadme))
  .add('Readme', () => <div style={{ fontSize: 30 }}>React 组件库</div>);
