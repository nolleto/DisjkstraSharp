var Controllers;
(function (Controllers) {
    var GraphController = (function () {
        function GraphController($scope, nodoFact) {
            this.$scope = $scope;
            this.nodoFact = nodoFact;
            this.model = {};
            this.nodos = nodoFact.nodos;
        }
        GraphController.prototype.getNodo = function (id) {
            return this.nodoFact.nodos.filter(function (x) { return x.Id == id; })[0];
        };
        GraphController.prototype.getNeighborNodos = function () {
            var _this = this;
            if (this.model.NodoId) {
                var nodo = this.nodos.filter(function (x) { return x.Id == _this.model.NodoId; })[0];
                var blockIds = nodo.Neighbors.map(function (x) { return x.Id; });
                blockIds.push(nodo.Id);
                return this.nodos.filter(function (x) { return blockIds.indexOf(x.Id) === -1; });
            }
            return [];
        };
        GraphController.prototype.removeNeighbor = function (id, n) {
            this.nodoFact.removeNeighbor(id, n);
        };
        GraphController.prototype.addNeighbor = function () {
            if (this.nodoFact.addNeighbor(this.model.NodoId, this.model.NodoIdNeighbor, this.model.Distance)) {
                this.model = {};
            }
        };
        return GraphController;
    })();
    Controllers.GraphController = GraphController;
})(Controllers || (Controllers = {}));
