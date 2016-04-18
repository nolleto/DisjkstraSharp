var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate']);
app.controller('homeCtrl', ['$http', '$scope', '$sce', 'nodoFactory', function ($http, $scope, $sce, nodoFactory) { return new Controllers.HomeController($http, $scope, $sce, nodoFactory); }]);
app.controller('graphCtrl', ['$scope', 'nodoFactory', function ($scope, nodoFactory) { return new Controllers.GraphController($scope, nodoFactory); }]);
app.factory('nodoFactory', [function () { return new Factories.NodoFactory(); }]);
app.directive('info', Directives.Info.instance);
app.directive('ngIf', function () {
    return {
        link: function (scope, element, attrs) {
            if (scope.$eval(attrs.ngIf)) {
                // remove '<div ng-if...></div>'
                element.replaceWith(element.children());
            }
            else {
                element.replaceWith(' ');
            }
        }
    };
});
