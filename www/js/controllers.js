angular.module('starter.controllers', [])
    .controller('ProvidersCtrl', function ($scope, BackendAPI) {

        $scope.ServiceProviders = BackendAPI.providers()
            .then(function (res) {
                $scope.ServiceProviders = res.data;
                console.log(res);
            })
            .catch(function (err) {
                console.log("Connection error : " + JSON.stringify(err));
            })
            .finally(function () {
                console.log("Finish ");
            });
    })

    .controller('SectionsCtrl', function ($scope, BackendAPI, $stateParams, $state) {

        $scope.ProvidersSections = BackendAPI.get_sections()
            .then(function (res) {
                $scope.ProvidersSections = res.data;
                console.log(res);
            })
            .catch(function (err) {
                console.log("Connection error : " + JSON.stringify(err));
            })
            .finally(function () {
                console.log("Finish ");
            });

        $scope.currentProvider = $stateParams.sectionCode;
        $scope.goToSection = function (sect) {
            $state.go('news', {provider: sect.provider, section: sect.section, url: sect.url, logo: sect.logo});
        };
    })


    .controller('NewsCtrl', function ($scope, BackendAPI, $stateParams, NewsFactory) {
        $scope.currentSection = $stateParams.section;
        $scope.loadTitles = function () {
            NewsFactory.getNewsTitles($stateParams.url)
                .then(function (res) {
                    console.log(res.data.items);
                    if (res.data.items) {
                        $scope.titles = res.data.items;
                    } else {
                        console.log("Feed error : " + res.data);
                    }
                })
                .catch(function (err) {
                    console.log("Connection error : ");
                })
                .finally(function () {
                });
        };
        $scope.loadTitles();
    })
;
