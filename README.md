# Crud API REST con Node y Express

[+INFO](https://www.freecodecamp.org/news/create-crud-api-project/)

> Node.js y Express se centrean en el enrutamiento

> Una API es una tecnología que impulsa la comunicación entre aplicaciones de software en Internet. API significa Interfaz de Programación de Aplicaciones, y es básicamente un conjunto de reglas y protocolos que definen cómo diferentes programas pueden interactuar entre sí.

> Las API son la pieza clave que conecta varios componentes de software y permite trabajar juntos sin problemas. Permiten comunicación, compartir datos y hacer tareas. En el contexto del desarrollo web, las API permiten que la web funcionen como la conocemos hoy.

> En este proyecto de CRUD se exploró en el desarrollo de backend creando una API CRUD con Node.js y Express. Conceptos como, cómo configurar un entorno de desarrollo, crear un servidor con Express y Node.js, y lo más importante, cómo manejar las operaciones CRUD y probar su API usando Postman.

> Imagine tener dos programas diferentes: programa A y programa B. Para que estos dos programas se comuniquen juntos, se necesita una API y un conjunto de reglas aseguran que sepan qué esperar cuando interactúan entre sí.

> Como desarrollador de backend, sus responsabilidades implican crear aplicaciones del lado del servidor, manejar el almacenamiento de datos y proporcionar las funcionalidades necesarias para hacer todo esto a través de API.

> Hay diferentes tipos de API como REST, GraphQL, gRPC, SOAP y WebSockets. Sin embargo, cuando se trata de desarrollo web, uno es más popular, y ese es el API REST.

# ¿Qué es Node.js?
Node.js es un entorno de tiempo de ejecución de código abierto y multiplataforma para ejecutar código JavaScript fuera de un navegador. Muy a menudo, lo usamos para crear servicios de back-end, también llamados APIs. Node es ideal para crear servicios de back-end altamente escalables, intensivos en datos y en tiempo real que potencian nuestras aplicaciones cliente

## Cómo instalar Node.js
Pasos de instalación:

1) Descargue el instalador de Mac/Windows desde el Sitio web node.js.
2) Elija la versión de Soporte a Largo Plazo (LTS) que se muestra a la izquierda
3) Después de descargar, instale/ejecute el instalador y, a continuación, siga las instrucciones. (Tendrá que hacer clic en el botón NEXT un montón de veces y aceptar la configuración de instalación predeterminada
4) Para confirmar que Node se ha instalado correctamente, abra su terminal y ejecute el comando. (Para Windows, es posible que deba reiniciar su comando antes de ejecutarlo)
```bash
node -version
```

# ¿Qué es Express?
Express es un backend web rápido, sin opinion y minimalista o un framework web del lado del servidor para Node.js. Básicamente, le brinda la capacidad de crear sus API como las desee, con menos código.

Es un marco construido sobre Node.js que le permite crear su Backend con facilidad. Puede usar Express en combinación con marcos frontend como React, Angular o Vue para crear aplicaciones de pila completa.

# ¿Por qué Necesitas Express?
Hace que construir aplicaciones web con Node.js sea mucho más fácil.
Es extremadamente ligero, rápido y gratuito.
Se utiliza tanto para aplicaciones renderizadas por servidor como para API/Microservicios.
Es el nodo más popular.
Le da control total sobre las solicitudes y respuestas.

## Ejecución
```bash 
npm start
```

## Comandos de instalación de Paquetes de Node
### express
```bash
npm install express
```

### nodemon: Para evitar la necesidad de reiniciar el servidor. Hay que configurarlo en `package.json`
```bash
npm install nodemon
``` 
```json
"start":"nodemon index.js"
```
```bash
npm start
```

### UUID: Genera un ID único para cada usuario que va a crear. Es útil para solicitudes GET, DELETE y PATCH user by ID, donde necesitará una forma de identificar a un usuario específico.
```bash
npm install uuid
```