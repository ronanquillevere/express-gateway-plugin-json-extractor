'use strict';

var policy = {
    name: 'json-extractor',
    policy: function policy(actionParams) {
        return function (req, res, next) {
            // eslint-disable-next-line no-console
            console.log('executing policy with ES6 code of json-extractor plugin', actionParams);

            next();
        };
    }
};

/*eslint no-console: "warn"*/
var main = {
  version: 'v1.0', //plugin engine version
  init: function init(pluginContext) {
    pluginContext.registerPolicy(policy);
    console.log('json-extractor-policy registered');

    pluginContext.eventBus.on('hot-reload', function (_ref) {
      var type = _ref.type,
          newConfig = _ref.newConfig;

      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function (_ref2) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function (_ref3) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function (_ref4) {
      console.log('admin ready');
    });
  }
};

module.exports = main;
