const Factories                 = use('core/factories');
const AdvertisementFactory      = Factories('usersRoles');


const AdsController = {

    path: AdvertisementFactory.__model__.name,

    permissions: {},

    GET : [
        function () {

            return AdvertisementFactory.find({});
        }
    ],

    POST: [
        function () {
            return AdvertisementFactory.new(this.request.body)
                .then(ad => ad.save());
        }
    ]
};


module.exports = AdsController;