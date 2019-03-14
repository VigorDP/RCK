import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { Upload } from './index';

const props = {
  action: '/upload.do',
  type: 'drag',
  accept: '.png',
  beforeUpload(file) {
    console.log('beforeUpload', file.name);
  },
  onStart: file => {
    console.log('onStart', file.name);
  },
  onSuccess(file) {
    console.log('onSuccess', file);
  },
  onProgress(step, file) {
    console.log('onProgress', Math.round(step.percent), file.name);
  },
  onError(err) {
    console.log('onError', err);
  },
  style: {
    display: 'inline-block',
    width: 200,
    height: 200,
    background: '#eee'
  }
  // openFileDialogOnClick: false
};

const Demo = <Upload {...props} />;

storiesOf('组件列表|Upload', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);
