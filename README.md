Corré npm install.
Con toda la info del form, armate un .json y guardá toda la info en un objeto con nombre ‘data’. Usá un convertidor, quizás tengas que limpiarlo un poco pues ñ & tildes are not our friends.
Armate un array ‘list’ con los mismos ids que hay en data.
Cargá las credenciales de la cuenta desde la que se va a enviar el mail. Para autorizar el envío: (https://hotter.io/docs/email-accounts/secure-app-gmail/)
Personalizá el cuerpo del mail. No te olvides de sumar el promedio de lo que se debe gastar y un deadline de entrega.
En emailOptions escribí el asunto	
Corré: node random-friend.js
