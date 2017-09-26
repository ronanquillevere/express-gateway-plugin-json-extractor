'use strict';

var policy = {
    name: 'json-extractor',
    policy: function policy(actionParams) {
        return function (req, res, next) {
            debugger;
            // eslint-disable-next-line no-console
            console.log('executing policy with ES6 code of json-extractor plugin', actionParams);
            console.log('Json path param: ', actionParams.jsonPath);
            console.log('Service endpoint: ', actionParams.serviceEndpoint);
            console.log('Field name param: ', actionParams.fieldName);
            next();
        };
    }
};

/*eslint no-console: "warn"*/
var main = {
    version: '1.2.0', //plugin engine version
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
    },
    policies: ['json-extractor'], // this is for CLI to automatically add to "policies" whitelist in gateway.config
    options: { // This is for CLI to ask about params 'eg plugin configure example'
        jsonPath: {
            title: 'Json Path',
            description: 'The json path to access the field of the object to extract',
            type: 'string',
            required: true
        },
        serviceEndpoint: {
            title: 'The service endpoint',
            description: 'The service endpoint',
            type: 'string',
            required: true
        },
        fieldName: {
            title: 'The name of the field inside the express gateway context',
            description: 'Optional field name to specify inside the eg context, otherwise field name from extracted json will be used',
            type: 'string'
        }
    }
};

module.exports = main;
