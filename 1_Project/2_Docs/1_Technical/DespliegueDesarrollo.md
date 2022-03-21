# DESPLIEGUE: App Cinematografia en Desarrollo
Pasos a seguir para el despliegue de la aplicación en local para desarrollo

--- 
# Previos a cambio de versión  

+ Asegurar que archivo "ReadMe" contiene la nueva versión  
+ Asegurar que archivo "package.json" contiene la nueva versión 

# Pasos
##### Base de datos
+ Asegurar que la base de datos de prueba almacenado en "1_Project\4_Database\1.0\db.json" se encuentra situado en "1_Project\1_Sources\frontend\" para que json-server pueda acceder a sus datos   


### Servidor
Previamente se debe tener instalado json-server
~~~
npm i -g json-server
~~~

Ejecutar el servidor que simula backend para obtener una API REST falsa desde la ubicación donde se encuentre la base de datos de prueba. En este caso:
~~~
cd \1_Project\1_Sources\frontend\
json-server --watch db.json --delay 1000
~~~

##### Frontend 
Situados en la carpeta '\1_Project\1_Sources\frontend\':  

Previamente (si no se tiene) instalación de los modulos definidos en package.json:
~~~
    npm install
~~~
 
En la carpeta frontend ejecutar:
~~~
    npm start
~~~

Debe saltar navegador predeterminado con pestaña con url 'http://localhost:4200' cargando la aplicación
