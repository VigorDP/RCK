import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Button, ButtonGroup } from './index';
import ButtonReadme from './README.md';

storiesOf('组件列表|Button', module)
  .addDecorator(withDocs(ButtonReadme))
  .add('single', () => (
    <div>
      <h3>Button Style</h3>
      <Button btnStyle="default">Default</Button>
      <Button btnStyle="primary">Primary</Button>
      <Button btnStyle="emphasis">Emphasis</Button>
      <Button btnStyle="danger">Danger (Alias of Emphasis)</Button>
      <Button btnStyle="flat">Flat</Button>
      <Button btnStyle="border">Border (Alias of Flat)</Button>
      <Button btnStyle="link">Link</Button>
      <h3>Button Size</h3>
      <Button btnSize="lg">Large</Button>
      <Button btnSize="large">Large</Button>
      <Button btnSize="md">Medium</Button>
      <Button btnSize="medium">Medium</Button>
      <Button btnSize="sm">Small</Button>
      <Button btnSize="small">Small</Button>
      <Button btnSize="xs">Extra Small</Button>
      <Button btnSize="extra-small">Extra Small</Button>
      <h3>Button State</h3>
      <Button>Normal</Button>
      <Button hover>Hover</Button>
      <Button active>Active</Button>
      <Button focus>Focus</Button>
      <Button disabled>Disabled</Button>
      <Button block>Block Button</Button>
      <h3>Icon Button</h3>
      <Button>
        <i className="fa fa-download" />
        Download
      </Button>
      <Button btnStyle="primary">
        <i className="fa fa-plus" />
        Add Account
      </Button>
    </div>
  ))
  .add('group', () => (
    <div>
      <h3>Button Group</h3>
      <ButtonGroup>
        <Button active>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <h3>Button Group Vertical</h3>
      <ButtonGroup vertical>
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
    </div>
  ));
