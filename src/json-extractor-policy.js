export default {
    name: 'json-extractor',
    policy: (actionParams) => {
        return (req, res, next) => {
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
