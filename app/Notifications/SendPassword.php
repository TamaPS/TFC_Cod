<?php

namespace App\Notifications;

//use Illuminate\Bus\Queueable;
//use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendPassword extends Notification
{
    //use Queueable;

    private $password;

    public function __construct($password)
    {
        $this->password = $password;
    }


    public function via()
    {
        return ['mail'];
    }

    //MÉTODO PARA ENVIAR LA PASSWORD GENERADA EN FORGOTPASSWORDCONTOLLER
    public function toMail()
    {
        return (new MailMessage)
            ->line('Esta es tu nueva contraseña:')
            ->line($this->password)
            ->line('Una vez que hayas iniciado sesión puedes modificarla en "Editar perfil".');
    }
}
