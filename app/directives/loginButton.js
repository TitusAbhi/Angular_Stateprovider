app
    .directive('loginButton', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            action: '&'     //Isolated scope   
			},
        template: '<input type="button" name="commit" value="Login" ng-click = "action()" ng-class ="">',
        link: function ($scope, element, attrs) {
            element.bind('mouseenter', function () {
                element.find("input").css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.find("input").css('background', 'white');
            });

		} //DOM manipulation
    }
});