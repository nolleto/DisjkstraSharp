module Controllers {
    
    export class HomeController {
        private $http: ng.IHttpService;
        private $scope: ng.IScope;
        private $sce: any;
        private nodoFact: Factories.NodoFactory;
        public nodos: Models.Nodo[];

        constructor($http: ng.IHttpService, $scope: ng.IScope, $sce, nodoFact: Factories.NodoFactory) {
            this.$http = $http;
            this.$scope = $scope;
            this.$sce = $sce;
            this.nodoFact = nodoFact;
        }

        public calculate() {
            var self = this;
            var n = this.nodoFact.nodos;
            
            this.$http.post('/Home/Execute', { nodos: n }, {}).then(function successCallback(response: ng.IHttpPromiseCallbackArg<Models.Nodo[]>) {
                self.nodos = response.data;

            }, function errorCallback(response) {
                console.log('error', response);
            });
        }

        public generatePopover(nodo: Models.Nodo, distance: Models.Distance) {
            if (nodo.Id == distance.IdTarget) return 'Nodo de origem';
            else if (distance.Traveleds.length == 0) return 'Chegou de primeira';
            var list = distance.Traveleds.map((id, index) => {
                var name = this.nodos.filter(x => x.Id == id)[0].Name;
                if (index == 0) return name;
                else return ` -> ${name}`;
            });
            return list.join('');
        }
    }
}