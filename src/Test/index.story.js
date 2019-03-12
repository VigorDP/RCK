import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Button from './index';
import ButtonReadme from './README.md';

storiesOf('Button', module)
  .addDecorator(withDocs(ButtonReadme))
  .add('Default', () => <Button title="Hello Button" />);
