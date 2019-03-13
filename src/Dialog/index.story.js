import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { Dialog } from './index';

const Demo = (
  <Dialog
    title={'Dialog'}
    onClose={() => {}}
    visible
    footer={[
      <button type="button" className="btn btn-default" key="close">
        Close
      </button>,
      <button type="button" className="btn btn-primary" key="save">
        Save changes
      </button>
    ]}
  >
    <p>first dialog</p>
  </Dialog>
);

storiesOf('组件列表|Dialog', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);
