API REST para análisis y manipulación de texto
Consiste en desarrollar, dockerizar, testear y desplegar una API REST llamada TextMaster, construida con Node.js y Express.
GET /

Devuelve un mensaje de bienvenida junto con el nombre del host (ID del contenedor).
Ejemplo:

Bienvenido a TextMaster API. Servidor: 


Se utiliza os.hostname().

GET /health

Retorna el estado de la aplicación:

{
  "status": "UP",
  "uptime": 14.23
}

GET /reverse?text=hola

Invierte una cadena.
Respuesta:

aloh


Si falta el parámetro text, devuelve error 400.

GET /analyze?text=hola mundo

Devuelve estadísticas del texto:

{
  "length": 10,
  "word_count": 2,
  "has_numbers": false
}

GET /transform?text=hola&action=upper

Transforma la cadena:

upper → mayúsculas

lower → minúsculas

Ejemplo:

HOLA

🛠 2. Requisitos Técnicos
✔ Node.js + Express

Servidor HTTP básico con rutas REST.

✔ Logging con Morgan

Registrar cada petición en consola usando el formato estándar.

✔ Testing con Jest

Crear el archivo text.test.js para probar:

Función de invertir texto

Función de análisis
