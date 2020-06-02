<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AccountActivation extends Notification
{
    private $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function via()
    {
        return ['mail'];
    }

    //MÉTODO PARA ENVIAR LA VERIFICACIÓN DEL EMAIL
    public function toMail()
    {
        $url = url('/account-activation?token='.$this->user->remember_token);

        return (new MailMessage)
                    ->line('Pulsa en el siguiente enlace para completar tu registro.')
                    ->action('Verificar cuenta', $url)
                    ->line('Gracias por registrarte en Retaged.');
    }
}
