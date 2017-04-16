const Config                    = use('config');
const Errors                    = use('core/errors');
const request                   = require('request-promise');


function authInterceptor(body){
    let sessionId = this.request.headers['sessionid'];
    if(!sessionId){
        if(Config.allowedUnauthUrls.includes(this.request.url)){
            return body;
        }

        throw new Errors.Unauthorized(`User is unauthorized!`);
    }

    return request.send({
        url: Config.transport.dal + `sessions/${sessionId}`
    })
        .then(response =>{
            if(response.status == 404 ||
                response.body.status == 'closed'){
                throw new Errors.Unauthorized(`User is unauthorized!`);
            }

            this.request.userId = response.body.userId;
            return body;
        })

}

module.exports = authInterceptor;