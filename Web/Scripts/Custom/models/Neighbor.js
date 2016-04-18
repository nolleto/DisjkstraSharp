var Models;
(function (Models) {
    var Neighbor = (function () {
        function Neighbor(id, distance) {
            if (id === void 0) { id = undefined; }
            if (distance === void 0) { distance = undefined; }
            this.Id = id;
            this.Distance = distance;
        }
        return Neighbor;
    })();
    Models.Neighbor = Neighbor;
})(Models || (Models = {}));
