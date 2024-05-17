import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const demoPlugin = createPlugin({
  id: 'demo',
  routes: {
    root: rootRouteRef,
  },
});

export const DemoPage = demoPlugin.provide(
  createRoutableExtension({
    name: 'DemoPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
