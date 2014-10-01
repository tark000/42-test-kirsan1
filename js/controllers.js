var userControllers = angular.module('userControllers', []);

userControllers.controller('IndexController', function ($scope) {
    $scope.user = {'name': "Taras", 'surname': "Grabets", 'date of birth': "27/02/1990", 'bio':'',
    'email':"grabectm@gmail.com",'Jabber':"tark@jabber.ua",'skype':"tark0004", 'Other..':""};


});

