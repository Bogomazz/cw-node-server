const Factories                 = use('core/factories');

const UsersFactory              = Factories('users');

const UsersController = {

    path: UsersFactory.__model__.name,

    permissions: {},

    GET : [

        function (userId) {

            return UsersFactory.get({id: userId});
        },

        function (phoneNumber=false) {
            return UsersFactory.get({phoneNumber});
        }
    ],

    POST : [
        function (){
            return UsersFactory.new(this.request.body)
                .then(user => user.save());
        }
    ]
};


module.exports = UsersController;