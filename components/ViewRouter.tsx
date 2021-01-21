import React from 'react';
import createRouter from 'router5';
import loggerPlugin from 'router5-plugin-logger';
import browserPlugin from 'router5-plugin-browser';
import routes from '../src/routes';
import { RouterProvider, useRoute } from 'react-router5';

declare interface IComponentRoutes {
  name: string;
  path: string;
  component: Function;
}

let componentRoutes: IComponentRoutes[] = [];

const configureRouter = () => {
  for (let [index, object] of Object.entries(routes)) {
    componentRoutes[(index as unknown) as number] = Object.assign(object, {
      name: object.component.name
    });
  }

  const router = createRouter(componentRoutes);
  router.usePlugin(loggerPlugin);
  router.usePlugin(browserPlugin());
  router.start();

  return router;
};

const router = configureRouter();

const App = () => {
  const { route } = useRoute();

  if (!route) {
    return <div>Null</div>;
  }

  for (let [_index, object] of Object.entries(componentRoutes)) {
    if (object.name === route.name) {
      return object.component();
    }
  }

  return <div>Not found</div>;
};

export default function ViewRouter() {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}
