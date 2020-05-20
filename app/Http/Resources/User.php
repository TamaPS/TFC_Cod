<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $liked = false;
        
        if (Auth::user()) {
            if ($this->likedBy()->find(Auth::user()->id)) {
                $liked = true;
            }
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'zip_code' => $this->zip_code,
            'image' => $this->image,
            'email_verified_at' => $this->email_verified_at,
            'active' => $this->active,
            'count_favorites' => $this->likedBy()->count(),
            'liked' => $liked,

        ];
    }
}
