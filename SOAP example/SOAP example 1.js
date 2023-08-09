const soap = require('easy-soap-request');

// URL 
const forumSoapURL = 'https://www.ejemplo.com/foro/soap';


const commentData = {
  username: 'UsuarioEjemploPepito',
  comment: 'Este es un comentario de ejemplo en el foro.',
};

//SOAP moment
const soapEnvelope = `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:for="http://www.ejemplo.com/foro">
    <soapenv:Header/>
    <soapenv:Body>
      <for:IngresarComentario>
        <for:Usuario>${commentData.username}</for:Usuario>
        <for:Comentario>${commentData.comment}</for:Comentario>
      </for:IngresarComentario>
    </soapenv:Body>
  </soapenv:Envelope>
`;

// web service action
const requestOptions = {
  url: forumSoapURL,
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'http://www.ejemplo.com/foro/IngresarComentario', 
  },
  body: soapEnvelope,
};


soap(requestOptions)
  .then(response => {
    
    console.log(response);
    console.log('Comentario ingresado exitosamente en el foro.');
  })
  .catch(error => {
    console.error('Error al ingresar el comentario en el foro:', error);
  });
