export default {
    name: 'json-extractor',
    policy: (actionParams) => {
        return (req, res, next) => {
            // eslint-disable-next-line no-console
            console.log('executing policy with ES6 code of json-extractor plugin', actionParams);

            next();
        };
    }
};
