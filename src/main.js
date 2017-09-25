/*eslint no-console: "warn"*/
import policy from './json-extractor-policy';

export default {
  version: '1.2.0', //plugin engine version
  init: function (pluginContext) {
    pluginContext.registerPolicy(policy);
    console.log('json-extractor-policy registered');

    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  }
};
