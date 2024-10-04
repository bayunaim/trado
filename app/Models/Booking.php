<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'trado_id', 'check_in_date', 'check_out_date', 'quantity', 'status',
    ];

    public function trado()
    {
        return $this->belongsTo(Trado::class);
    }
}

