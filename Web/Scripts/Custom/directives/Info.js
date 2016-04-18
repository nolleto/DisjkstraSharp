var Directives;
(function (Directives) {
    var Info = (function () {
        function Info() {
            this.restrict = 'E';
            this.templateUrl = '/Html/Info.html';
        }
        Info.instance = function () {
            return new Info();
        };
        Info.prototype.link = function (scope, elements, attrs) {
            //your code
        };
        return Info;
    })();
    Directives.Info = Info;
})(Directives || (Directives = {}));
