Ver modulo http, como funciona y que peticiones solicita

-npm install express

en el package se agrega:

- "dev": "node --watch index.js": sirve para produccion

en server-http: es el modulo fabrica para realizar un servidor:

- se crea como createServer
- no tiene respuesta automatica

en express:

- se crea a traves de una instancia de express
- tiene respuesta automatica(404)
- a traves de get() puedo controlar que mensaje mostrar en la respuesta
- en modo npm run dev: me permite realizar cambios en tiempo de ejecucion

Thunder Client:

- me permite ver el servidor en vez del navegador
- en get escribo: http://localhost:3000 y me etorna el mensaje
