import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { Menu, SubMenu, MenuItem, Divider } from './index';

const titleRight = <span>sub menu</span>;
const titleRight1 = <span>sub menu 1</span>;
const titleRight2 = <span>sub menu 2</span>;
const titleRight3 = <span>sub menu 3</span>;

const leftMenu = (
  <Menu defaultActiveFirst horizontal>
    <SubMenu title={titleRight} key="1" inline>
      <MenuItem key="1-1">0-1</MenuItem>
      <MenuItem key="1-2">0-2</MenuItem>
    </SubMenu>
    <MenuItem>
      <a href="http://taobao.com" target="_blank">
        i do not need key
      </a>
    </MenuItem>
    <MenuItem key="3">outer</MenuItem>
    <SubMenu title={titleRight1} key="4">
      <MenuItem key="4-1">inner inner</MenuItem>
      <Divider />
      <SubMenu key="4-2" title={titleRight2}>
        <MenuItem key="4-2-1">inn</MenuItem>
        <SubMenu title={titleRight3} key="4-2-2">
          <MenuItem key="4-2-2-1">inner inner</MenuItem>
          <MenuItem key="4-2-2-2">inner inner2</MenuItem>
        </SubMenu>
      </SubMenu>
    </SubMenu>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem key="4-3">outer3</MenuItem>
  </Menu>
);

storiesOf('组件列表|Menu', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{leftMenu}</div>);
