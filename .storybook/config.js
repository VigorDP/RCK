import React from 'react';
import {
  configure,
  addDecorator,
  setAddon,
  addParameters
} from '@storybook/react';
import addWithDoc from 'storybook-addon-props';
import styled from 'styled-components';

const StyledContainer = styled.div`
  @media screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section {
    margin-bottom: 30px;
  }

  article {
    margin-bottom: 15px;
  }
`;

const req = require.context('../src', true, /__story__\/index\.jsx?$/);

setAddon(addWithDoc);

addParameters({
  name: '@rck/ui',
  url: 'https://github.com/fengyinchao/RCK.git',
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <StyledContainer>{story()}</StyledContainer>);

configure(loadStories, module);
