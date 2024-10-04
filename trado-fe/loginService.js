app.factory("LoginService", function ($http) {
  const baseUrl = "http://localhost:8000/api/login"; // Adjust the URL to your Laravel API endpoint

  return {
    login: function (email, password) {
      return $http
        .post(baseUrl, { email, password })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            return { success: true };
          } else {
            return { success: false, message: "Invalid credentials." };
          }
        })
        .catch(() => {
          return { success: false, message: "Login failed. Please try again." };
        });
    },

    logout: function () {
      localStorage.removeItem("token");
    },
  };
});
