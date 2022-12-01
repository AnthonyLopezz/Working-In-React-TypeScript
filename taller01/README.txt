# CREAR PROYECTO

# Icon

#Instalar librerias básicas
Bootstrap y fontawesome

npm i boostrap
npm i @fortawesome/fontawesome-free

# Esto va dentro de package.json en el apartado de script. Es para modificar el puerto.

"start": "set PORT=8088 && react-scripts start",

# Esto va dentro de index.css

.checkStart{
  color: #8343a9;
}

.title{
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: italic;
}

# Incluya las librerias del proyecto dentro de index.tsx

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";