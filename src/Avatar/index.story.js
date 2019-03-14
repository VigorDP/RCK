import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { UserAvatar } from './index';
const Demo = (
  <div>
    <UserAvatar size="48" name="Will Binns-Smith" />
    <UserAvatar
      size="48"
      name="Will Binns-Smith"
      src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"
    />
    <UserAvatar
      size="48"
      name="John Doe"
      colors={['#ccc', '#fafafa', '#ccaabb']}
    />
    <UserAvatar size="48" name="Mary Ann Gilligans" />
    <UserAvatar size="48" name="Jane Doe" color="#FFF" />
    <UserAvatar size="48" name="Madonna" />
  </div>
);
storiesOf('组件列表|UserAvatar', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);
