module Directives {

    export class Info implements ng.IDirective {
        restrict = 'E';
        templateUrl = '/Html/Info.html'

        static instance(): ng.IDirective {
            return new Info();
        }
        
        link(scope: ng.IScope, elements: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
            //your code
        }
    }
}