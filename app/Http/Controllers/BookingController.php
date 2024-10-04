<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    // Create Booking
    public function store(Request $request)
    {
        $request->validate([
            'trado_id' => 'required|integer',
            'check_in_date' => 'required|date',
            'check_out_date' => 'required|date|after:check_in_date',
            'quantity' => 'required|integer|min:1',
        ]);

        $booking = Booking::create($request->all());

        return response()->json($booking, 201);
    }

    // List all bookings
    public function index()
    {
        $bookings = Booking::all();
        return response()->json($bookings);
    }

    // Get a single booking
    public function show($id)
    {
        $booking = Booking::findOrFail($id);
        return response()->json($booking);
    }

    // Update a booking
    public function update(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);

        $validatedData = $request->validate([
            'check_in_date' => 'sometimes|date',
            'check_out_date' => 'sometimes|date|after:check_in_date',
            'quantity' => 'sometimes|integer|min:1',
        ]);

        $booking->update($validatedData);

        return response()->json($booking);
    }

    // Delete a booking
    public function destroy($id)
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();
        return response()->json(['message' => 'Booking deleted successfully']);
    }

    // Filter bookings by check-in and check-out dates
    public function filter(Request $request)
    {
        $query = Booking::query();

        if ($request->has('check_in_date')) {
            $query->whereDate('check_in_date', '>=', $request->input('check_in_date'));
        }

        if ($request->has('check_out_date')) {
            $query->whereDate('check_out_date', '<=', $request->input('check_out_date'));
        }

        $bookings = $query->get();
        return response()->json($bookings);
    }
}
