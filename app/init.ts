/// <reference path="../typings/custom.system.d.ts" />
System.config({
  paths: {'*': '*.js?v=<%= VERSION %>'}
});

System.import('./app')
  .catch(e => console.error(e,
    'Report this error at https://github.com/mgechev/angular2-seed/issues'));