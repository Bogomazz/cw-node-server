module.exports = {
    server: {
        host: 'localhost',
        port: 3005
    },

    router: {
        urlPrefix: 'api/'
    },

    database: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'pets'
    },

    media: {
        urlPath: '/media',
        saveDir: '../../media',
        supportsTypes: [
            'image/jpeg',
            'image/png',
            'image/gif'
        ]
    },

    cors : {
      origin: '*'
    }
};