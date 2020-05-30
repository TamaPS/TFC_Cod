<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Product;
use App\User;

class Contact extends Notification
{
    //use Queueable;
    private $product;
    private $user_from;
    private $message;

    public function __construct(Product $product, User $user_from, string $message)
    {
        $this->product = $product;
        $this->user_from = $user_from;
        $this->message = $message;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('El usuario ' . $this->user_from->name . ' te ha mandado un mensaje en relación con tu producto:')
            ->line($this->product->name)
            ->line('Mensaje: ' . $this->message)
            ->line('Puedes responder a ' . $this->user_from->name . ' en el email: ' . $this->user_from->email);
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
