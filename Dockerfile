# Imagen base de Node.js
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar solo dependencias de producción (Solicitado en el enunciado)
RUN npm ci --omit=dev

# Copiar el resto de archivos
COPY . .

# Puerto que usa la aplicación
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "start"]