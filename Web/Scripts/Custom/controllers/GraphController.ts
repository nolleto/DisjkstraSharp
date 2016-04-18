module Controllers {

    export class GraphController {
        private $scope: ng.IScope;
        private nodoFact: Factories.NodoFactory;
        public nodos: Models.Nodo[]
        public model: any;

        constructor($scope: any, nodoFact: Factories.NodoFactory) {
            this.$scope = $scope;
            this.nodoFact = nodoFact;
            this.model = {};
            this.nodos = nodoFact.nodos;
        }

        public getNodo(id: string) {
            return this.nodoFact.nodos.filter(x => x.Id == id)[0];
        }

        public getNeighborNodos() {
            if (this.model.NodoId) {
                var nodo = this.nodos.filter(x => x.Id == this.model.NodoId)[0];
                var blockIds = nodo.Neighbors.map(x => x.Id);
                blockIds.push(nodo.Id);
                return this.nodos.filter(x => blockIds.indexOf(x.Id) === -1);
            }
            return [];
        }

        public removeNeighbor(id: string, n: Models.Neighbor) {
            this.nodoFact.removeNeighbor(id, n);
        }

        public addNeighbor() {
            if (this.nodoFact.addNeighbor(this.model.NodoId, this.model.NodoIdNeighbor, this.model.Distance)) {
                this.model = {};
            }
        }
    }
}