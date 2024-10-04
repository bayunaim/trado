app.factory("BookingsService", function ($http) {
  const baseUrl = "http://localhost:8000/api/bookings"; // Update with your Laravel API URL

  return {
    // Get all bookings
    getBookings: function () {
      return $http.get(baseUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },

    // Create a new booking
    createBooking: function (bookingData) {
      return $http.post(baseUrl, bookingData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },

    // Delete a booking
    deleteBooking: function (id) {
      return $http.delete(`${baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },

    // Filter bookings by dates
    filterBookings: function (filters) {
      return $http.get(`${baseUrl}/filter`, {
        params: filters,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
  };
});
