module Factories {

    export class NodoFactory {
        public nodos: Models.Nodo[]

        constructor() {
            this.nodos = [];
            this.createNodos();
        }
        
        private createNodos() {
            var n0 = new Models.Nodo("0", "Nodo 0");
            var n1 = new Models.Nodo("1", "Nodo 1");
            var n2 = new Models.Nodo("2", "Nodo 2");
            var n3 = new Models.Nodo("3", "Nodo 3");
            var n4 = new Models.Nodo("4", "Nodo 4");
            var n5 = new Models.Nodo("5", "Nodo 5");
            var n6 = new Models.Nodo("6", "Nodo 6");
            var n7 = new Models.Nodo("7", "Nodo 7");
            this.nodos = [n0, n1, n2, n3, n4, n5, n6, n7];

            n0.addNeighbor(n5.Id, 1);
            n0.addNeighbor(n2.Id, 1);
            n1.addNeighbor(n0.Id, 1);
            n2.addNeighbor(n1.Id, 1);
            n2.addNeighbor(n3.Id, 1);
            n3.addNeighbor(n0.Id, 1);
            n4.addNeighbor(n2.Id, 1);
            n5.addNeighbor(n6.Id, 1);
            n5.addNeighbor(n7.Id, 1);
            n6.addNeighbor(n4.Id, 1);
            n7.addNeighbor(n4.Id, 1);
        }

        public removeNeighbor(id: string, n: Models.Neighbor) {
            var nodo = this.nodos.filter(x => x.Id == id)[0];
            nodo.Neighbors = nodo.Neighbors.filter(x => x.Id != n.Id);
        }

        public addNeighbor(nodoId: string, nodoIdNeighbor: string, distance: number) {
            var nodo = this.nodos.filter(x => x.Id == nodoId)[0];
            var nodoN = this.nodos.filter(x => x.Id == nodoIdNeighbor)[0];
            
            if (nodo == null || nodoN == null || distance == undefined || distance <= 0) return false;
            nodo.addNeighbor(nodoN.Id, distance);
            return true;
        }
    }
}