const nodemailer = require("nodemailer");
var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

//IMPORTANTE: list debe tener tantos nros como participantes.

var data = [
  {
    id: "0",
    name: "Nombre",
    email: "Mail",
    options:"",
    address: "",
    person: "", //Esto va a ser la persona a la que le toque regalarle
  },
];

function randomize() {
  var sortList = list.sort(function () {
    return Math.random() - 0.5;
  });
  for (var i = 0; i < data.length; i++) {
    if (sortList[i] != data[i].id) {
      data[i].person = sortList[i];
    } else {
      randomize();
    }
  }
}
randomize();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "", //Casilla desde la que salen los mails
    pass: "", //Contraseña
    //Si sale error de autorización verificar:  (https://hotter.io/docs/email-accounts/secure-app-gmail/)
  },
});

for (var i = 0; i < data.length; i++) {
  var mail =    "Hola <b>" +
    data[i].name +
    "</b>! ¿Cómo estás? <br><br> Lanzamos el amigo invisible. <br> " +
    "<br><br> Te tocó regalarle a " +
    data[data[i].person].name +
    ". Su mail es: " +
    data[data[i].person].email +
    "<br> La idea es gastar _________  Es una buena oportunidad para bancar a tu amigx emprendedor! También valen regalos artesanales. Te dejo unas ideas de lo que podes regalarle, pero sentite libre de inventar si se te ocurre algo divertido! ¿A quién no le gustan las sorpresas?" +
    ".<br> En sus palabras le gustaría recibir: " +
    data[data[i].person].options +
    ".<br> Si es algo físico, sus indicaciones de entrega son: " +
    data[data[i].person].address +
    "<br>Tenés tiempo hasta el <b> _________</b>" + 
    "<br>Éxitos!";


  const emailOptions = {
    from: "mail@gmail.com", // mail desde el que se envía la info
    to: data[i].email,
    subject: "Asunto: ", //Redactar asunto
    html: mail,
  };
  transporter.sendMail(emailOptions);
}
