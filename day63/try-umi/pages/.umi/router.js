import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/home/page.html",
    "exact": true,
    "component": require('../home/page.jsx').default
  },
  {
    "path": "/index.html",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "path": "/users.html",
    "exact": true,
    "component": require('../users.js').default
  },
  {
    "component": () => React.createElement(require('C:/Users/zhh/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
