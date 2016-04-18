module Models {
    
    export class Nodo {
        public Id: string;
        public Name: string;
        public Distances: Distance[];
        public Neighbors: Neighbor[];

        constructor(id: string = undefined, name: string = undefined) {
            this.Id = id;
            this.Name = name;
            this.Neighbors = [];
            this.Distances = [];
        }

        public addNeighbor(id: string, distance: number) {
            var temp = new Neighbor(id, distance);
            this.Neighbors.push(temp);
        }
    
    }
}