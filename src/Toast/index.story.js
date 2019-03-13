import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Toast } from './index';
import ButtonReadme from './README.md';

storiesOf('组件列表|Toast', module)
  .addDecorator(withDocs(ButtonReadme))
  .add('Toast', () => {
    Toast.info('hello', 1000);
    setTimeout(() => {
      Toast.success('hello', 1000);
      setTimeout(() => {
        Toast.fail('hello', 1000);
        setTimeout(() => {
          Toast.loading('loading');
          setTimeout(() => {
            Toast.hide();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);

    return <div>Light Toast</div>;
  });
