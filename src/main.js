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
    },
    policies:['json-extractor'], // this is for CLI to automatically add to "policies" whitelist in gateway.config
    options: {  // This is for CLI to ask about params 'eg plugin configure example'
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
        fieldName : {
            title: 'The name of the field inside the express gateway context',
            description: 'Optional field name to specify inside the eg context, otherwise field name from extracted json will be used',
            type: 'string',
        }
    }
};
