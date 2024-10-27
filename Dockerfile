# Etapa 1: Compilar la aplicación React
FROM node:20-alpine AS build

# Crear directorio de trabajo
WORKDIR /app

ENV ASSET_PATH="https://d1icgfgxibs78l.cloudfront.net/"

ENV BASE_DOMAIN="serpa.cloud"

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN yarn -only=prod

# Copiar el resto del código de la aplicación
COPY . .

# Compilar la aplicación
RUN yarn build

# Etapa 2: Configurar Nginx para servir la aplicación
FROM nginx:stable-alpine

# Elimina la configuración por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos generados en el paso anterior a la carpeta de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiar archivo de configuración personalizado de Nginx si lo tienes
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para el contenedor
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
