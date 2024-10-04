app.controller("LoginController", function ($scope, $location, LoginService) {
  $scope.login = function () {
    LoginService.login($scope.email, $scope.password)
      .then(function (response) {
        if (response.success) {
          $location.path("/home"); // Redirect to home on successful login
        } else {
          $scope.errorMessage = response.message; // Show error message
        }
      })
      .catch(function (error) {
        $scope.errorMessage = "Login failed. Please try again.";
      });
  };
});
