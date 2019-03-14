import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { Steps, Step } from './index';

const description =
  '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';
const Demo = (
  <div>
    <Steps current={1}>
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" />
      <Step title="待运行" />
    </Steps>
    <Steps current={1} style={{ marginTop: 40 }}>
      <Step title="已完成" description={description} />
      <Step title="进行中" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
    </Steps>
    <Steps current={1} style={{ marginTop: 40 }} status="error">
      <Step title="已完成" description={description} />
      <Step title="进行中" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
    </Steps>
  </div>
);
storiesOf('组件列表|Steps', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div>{Demo}</div>);
