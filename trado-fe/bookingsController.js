app.controller("BookingsController", function ($scope, BookingsService) {
  $scope.bookings = [];
  $scope.newBooking = {
    check_in_date: "",
    check_out_date: "",
    quantity: 1,
  }; // Initialize newBooking
  $scope.filters = {
    check_in_date: "",
    check_out_date: "",
  };

  // Load all bookings
  $scope.loadBookings = function () {
    BookingsService.getBookings().then(
      function (response) {
        $scope.bookings = response.data;
      },
      function (error) {
        console.error("Error loading bookings:", error);
      }
    );
  };

  // Filter bookings
  $scope.filterBookings = function () {
    BookingsService.filterBookings($scope.filters).then(
      function (response) {
        $scope.bookings = response.data;
      },
      function (error) {
        console.error("Error filtering bookings:", error);
      }
    );
  };

  // Create a new booking
  $scope.createBooking = function () {
    if (
      !$scope.newBooking.check_in_date ||
      !$scope.newBooking.check_out_date ||
      !$scope.newBooking.quantity
    ) {
      alert("Please fill in all fields.");
      return;
    }

    BookingsService.createBooking($scope.newBooking).then(
      function (response) {
        $scope.bookings.push(response.data); // Add new booking to the list
        $scope.newBooking = {
          // Reset form
          check_in_date: "",
          check_out_date: "",
          quantity: 1,
        };
      },
      function (error) {
        console.error("Error creating booking:", error);
      }
    );
  };

  // Delete a booking
  $scope.deleteBooking = function (id) {
    BookingsService.deleteBooking(id).then(
      function (response) {
        $scope.bookings = $scope.bookings.filter(function (booking) {
          return booking.id !== id;
        });
      },
      function (error) {
        console.error("Error deleting booking:", error);
      }
    );
  };

  // Initialize by loading bookings
  $scope.loadBookings();
});
