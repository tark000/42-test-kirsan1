var testApp = angular.module('testApp', ['userControllers','ngRoute']);


testApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/my_contact.html',
                controller: 'IndexController'
            }).

            otherwise({
                redirectTo: '/'
            });

    }]);


