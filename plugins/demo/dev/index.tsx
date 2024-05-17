import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { demoPlugin, DemoPage } from '../src/plugin';

createDevApp()
  .registerPlugin(demoPlugin)
  .addPage({
    element: <DemoPage />,
    title: 'Root Page',
    path: '/demo'
  })
  .render();
