var Models;
(function (Models) {
    var Nodo = (function () {
        function Nodo(id, name) {
            if (id === void 0) { id = undefined; }
            if (name === void 0) { name = undefined; }
            this.Id = id;
            this.Name = name;
            this.Neighbors = [];
            this.Distances = [];
        }
        Nodo.prototype.addNeighbor = function (id, distance) {
            var temp = new Models.Neighbor(id, distance);
            this.Neighbors.push(temp);
        };
        return Nodo;
    })();
    Models.Nodo = Nodo;
})(Models || (Models = {}));
