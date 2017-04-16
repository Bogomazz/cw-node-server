const Factories                 = use('core/factories');
const AdvertisementFactory      = Factories('roles');


const AdsController = {

    path: AdvertisementFactory.__model__.name,

    permissions: {},

    GET : [
        function () {

            return AdvertisementFactory.find({});
        },

        function (rolesId){
            return AdvertisementFactory.get({id: rolesId});
        }
    ],

    POST: [
        function () {
            return AdvertisementFactory.new(this.request.body)
                .then(ad => ad.save());
        }
    ],

    PUT: [
        function (rolesId) {
            return AdvertisementFactory.get({id: rolesId})
                .then(ad => {
                    ad.populate(this.request.body);
                    return ad;
                })
                .then(ad => ad.save());
        }
    ]
};


module.exports = AdsController;