import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Test from '../index';

const ScrollWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #f0f0f0;
`;

const ScrollSection = styled.div`
  overflow-y: auto;
  height: 100%;
`;

const AnotherSection = styled.div`
  height: 5000px;
`;

function handleClick() {
  console.log('click 触发');
}

storiesOf('Components|Test', module).add('Test', () => <Test title="test" />);
