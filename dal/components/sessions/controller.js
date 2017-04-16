const Factories                 = use('core/factories');


const SessionsFactory            = Factories('sessions');

const SessionsController = {

    path: SessionsFactory.__model__.name,

    permissions: {},

    GET : [

        function () {

            return SessionsFactory.find({});
        },

        function (sessionsId){
            return SessionsFactory.get({id: sessionsId});
        }
    ],

    POST: [
        function (userId) {
            userId = +userId;
            return SessionsFactory.new(Object.assign({userId},this.request.body))
                .then(session => session.save());
        }
    ],

    PUT: [
        function (sessionsId) {
            return SessionsFactory.get({id: sessionsId})
                .then(session => {
                    session.populate(this.request.body);
                    return session.save();
                });
        }
    ]
};


module.exports = SessionsController;