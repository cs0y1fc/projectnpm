import './style.css'
import showdatetime from '@cs0y1fc/showdatetime';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hola, IT Academy!</h1>
    <p class="read-the-docs">
      Has importat el paquet "showdatetime" de npm.
      
      Revisa la consola del navegador!
    </p>
  </div>
`;

// Cridem la funció que hem importat.
showdatetime();