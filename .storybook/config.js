import { configure, addParameters } from '@storybook/react';
const req = require.context('../src', true, /\.story.js$/);

addParameters({
  options: {
    name: '风之化身 组件库',
    url: 'https://github.com/fengyinchao/RCK.git',
    isFullScreen: false,
    showNav: true,
    showPanel: false,
    sortStoriesByKind: false,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
