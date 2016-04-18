var Controllers;
(function (Controllers) {
    var HomeController = (function () {
        function HomeController($http, $scope, $sce, nodoFact) {
            this.$http = $http;
            this.$scope = $scope;
            this.$sce = $sce;
            this.nodoFact = nodoFact;
        }
        HomeController.prototype.calculate = function () {
            var self = this;
            var n = this.nodoFact.nodos;
            this.$http.post('/Home/Execute', { nodos: n }, {}).then(function successCallback(response) {
                self.nodos = response.data;
            }, function errorCallback(response) {
                console.log('error', response);
            });
        };
        HomeController.prototype.generatePopover = function (nodo, distance) {
            var _this = this;
            if (nodo.Id == distance.IdTarget)
                return 'Nodo de origem';
            else if (distance.Traveleds.length == 0)
                return 'Chegou de primeira';
            var list = distance.Traveleds.map(function (id, index) {
                var name = _this.nodos.filter(function (x) { return x.Id == id; })[0].Name;
                if (index == 0)
                    return name;
                else
                    return " -> " + name;
            });
            return list.join('');
        };
        return HomeController;
    })();
    Controllers.HomeController = HomeController;
})(Controllers || (Controllers = {}));
