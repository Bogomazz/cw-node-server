module.exports = {
    factories: [],
    controllers: [
        __dirname + '/controller'
    ],
    requestInterceptors: [
        __dirname + '/authInterceptor'
    ],
    responseInterceptors: []
};
