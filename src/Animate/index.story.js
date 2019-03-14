import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { Animate } from './index';

const Div = props => {
  const { show, ...restProps } = props;
  const newStyle = { display: show ? '' : 'none' };
  return (
    <div {...restProps} style={newStyle}>
      111
    </div>
  );
};

const Demo = (
  <Animate transitionName="fade">
    <Div show={true} />
  </Animate>
);
storiesOf('组件列表|Animate', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);
