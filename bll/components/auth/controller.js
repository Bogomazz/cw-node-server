const Errors                    = use('core/errors');
const Config                    = use('config');
const path                      = require('path');
const request                   = require('request-promise');
const urlencode                 = require('urlencode');
const services                  = require('./services');


const UsersController = {

    path: 'auth',

    permissions: {},

    GET : [],

    POST : [
        function () {
            // @path: register
            let body = Object.assign(services.encodePassword(this.request.body.password), this.request.body);
            delete body.password;
            return request.send({
                method: 'POST',
                uri: Config.transport.dal +'users',
                json: true,
                body
            })
                .then(response => response.body);
        },

        function () {
            // @path: login
            return request.send({
                method: 'GET',
                uri: Config.transport.dal + `users?phoneNumber=${this.request.body.phoneNumber}`,
            })
                .then(responseUser => {
                    if(responseUser.status == 404){
                        throw new Errors.NotFound();
                    }
                    if(responseUser.status == 501){
                        throw new Error();
                    }
                    if(!services.checkPassword(responseUser.body, this.request.body.password)){
                        throw new Errors.BadRequest('Password or phone number is wrong');
                    }

                    return request.send({
                        method: 'POST',
                        uri: Config.transport.dal + `user/${responseUser.body.id}/sessions`
                    })
                        .then(sessionResp => {
                            return {
                                user: responseUser.body,
                                session: sessionResp.body
                            }
                        });
                });

        }
    ]
};


module.exports = UsersController;