import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { BulletList } from './index';
const Demo = <BulletList />;
storiesOf('组件列表|Loader', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => (
    <div
      style={{
        width: 400
      }}
    >
      {Demo}{' '}
    </div>
  ));
