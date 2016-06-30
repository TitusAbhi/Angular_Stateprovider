app.service('loginService', function () {
   
	this.submit = function(username, password)
	 {		 
		 if(username !== myusers.username || password !== myusers.password) {
			 return true;
		 }
		 else {
			 return false;
		 }
    };

   var myusers = 
         {
           username: 'admin',
           password: 'admin'
         };
		 
    

});