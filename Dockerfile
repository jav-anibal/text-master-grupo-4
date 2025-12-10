# Etapa de construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias primero (para aprovechar caché)
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm ci --omit=dev

# Copiar código fuente
COPY src/ ./src/

# Etapa final
FROM node:18-alpine

WORKDIR /app

# Copiar desde la etapa de construcción
COPY --from=builder /app ./

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "src/server.js"]
