# Etapa de construcción
# Instala la imagen de node.18-alpine, que por el momento sera temporal, 
# donde se construiran las dependencias.
FROM node:18-alpine AS builder

# Crea (si no existe) y se mueve a la carpeta app de la imagen, donde ocurrira todo lo que hagamos
WORKDIR /app

# Copiar archivos de dependencias primero (para aprovechar caché)
# Al copiar los archivos dentro del contenedor, ahorra la instalacion de dependencias si ya estaban instaladas anteriormente
COPY package*.json ./

# Instalar solo dependencias de producción
# Omite las dependencias de desarrollo e instala solo las de produccion
RUN npm ci --omit=dev

# Copiar código fuente
COPY src/ ./src/

# Etapa final
# Inicia otra imagen limpia donde trabajar con las dependencias
FROM node:18-alpine

# Directorio de Trabajo
WORKDIR /app

# Copiar desde la etapa de construcción (builder de la primera linea)
# las dependencias y el codigo fuente teniendo asi una imagen sin residuos
COPY --from=builder /app ./

# Exponer puerto (Solamente indicativo, no abre nada)
EXPOSE 3000

# Comando de inicio al ejecutar el contenedor
CMD ["node", "src/server.js"]