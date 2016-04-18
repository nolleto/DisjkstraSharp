module Models {

    export class Neighbor {
        public Id: string;
        public Distance: number;

        constructor(id: string = undefined, distance: number = undefined) {
            this.Id = id;
            this.Distance = distance;
        }
    }
}