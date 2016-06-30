app.controller('loginController', ['$scope','$cookies', function($scope,$cookies,loginService) {
    
	$scope.username;
	$scope.password;
	$scope.loginBtnClick = function(){
	 $scope.showerror = loginService.submit($scope.username,$scope.password);	
	 $scope.showsuccess = !$scope.showerror;
	};
	$scope.Remember = function()
	{
		if($scope.check){
		  var cookie = $cookies.get("remember");
		  console.log(cookie);
          if(cookie === "") {
			  console.log("Cook");
			  $cookies.put("remember","true");
		  }
		}
	}
}]);