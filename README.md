# TextMaster API 📝

API REST para análisis y manipulación de cadenas de texto, desarrollada con Node.js y Express.

## 🚀 Características

- Análisis de texto (longitud, palabras, detección de números)
- Inversión de cadenas
- Transformación de texto (mayúsculas/minúsculas)
- Logging automático con Morgan
- Tests automatizados con Jest
- CI/CD con GitHub Actions
- Dockerización optimizada
- Despliegue continuo en Render

## 📋 Endpoints

### `GET /`
Mensaje de bienvenida con información del servidor.

**Respuesta:**
```json
{
  "message": "Bienvenido a TextMaster API. Servidor: hostname",
  "version": "1.0.0",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

### `GET /health`
Health check del servicio.

**Respuesta:**
```json
{
  "status": "UP",
  "uptime": 3600,
  "timestamp": "2025-01-15T10:30:00.000Z",
  "service": "TextMaster API"
}
```

### `GET /reverse?text=hola`
Invierte una cadena de texto.

Parámetros:
- `text` (requerido): Texto a invertir

Respuesta:
json
{
  "original": "hola",
  "reversed": "aloh"
}
```

### `GET /analyze?text=hola mundo`
Analiza el texto y devuelve estadísticas.

**Parámetros:**
- `text` (requerido): Texto a analizar

**Respuesta:**
```json
{
  "length": 10,
  "word_count": 2,
  "has_numbers": false
}
```

### `GET /transform?text=hola&action=upper`
Transforma el texto según la acción especificada.

**Parámetros:**
- `text` (requerido): Texto a transformar
- `action` (requerido): `upper` o `lower`

**Respuesta:**
```json
{
  "original": "hola",
  "action": "upper",
  "transformed": "HOLA"
}
```

## 🛠️ Instalación Local
```bash
# Clonar repositorio
git clone [URL-del-repo]
cd textmaster-api

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar tests
npm test

# Tests con cobertura
npm test -- --coverage
```

## 🐳 Docker
```bash
# Construir imagen
docker build -t textmaster-api .

# Ejecutar contenedor
docker run -p 3000:3000 textmaster-api
```

## 🔧 Variables de Entorno

- `PORT`: Puerto del servidor (default: 3000)

## 👥 Equipo

- **Anibal**: DevOps 
- **Daniel**: Endpoints Base (/, /health)
- **Manuel**: Análisis de Texto (/reverse, /analyze)
- **Alberto**: Transformación (/transform) & Documentación

## 📄 Licencia

MIT
