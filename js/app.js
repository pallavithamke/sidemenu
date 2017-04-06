/**
 * Created by pallavi on 3/22/2017.
 */

angular.module('ngMaterialSidemenu').controller('AppController', function($scope,$mdSidenav) {

    debugger;

    $scope.toShow = "home";

    $scope.toggleLeft = function() {
        $mdSidenav("left").toggle();
    };

    $scope.close = function () {
        $mdSidenav('left').close();
    };

    $scope.show = function (toShow) {
        $scope.toShow = toShow;
    };
});
