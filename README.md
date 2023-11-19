# inf322-2023-2-grupo-7
Proyecto Diseño de interfaces usuarias. Implementacion de funciones propuestas en la entrega 2.

# Consideraciones
- Al no tener backend, para iniciar sesion dentro de la pagina web hay que usar las credenciales: <br>
**usuario: ian.cooper@usm.cl** <br> **contraseña: 12345**
- Las denuncias creadas por el usuario se almacenan de forma local en la cache del navegador.
- Se tienen dos denunciadas creadas con anterioridad y que sirven de ejemplo.

#  Descripción
- Se creó una barra de navegación con varias rutas, pero que no tienen una función, se puede interactuar pero se irá a una interfaz con solo texto.

- La página principal está en la barra, con el nombre del foro, el cual es "MuniDenuncias" y donde se pueden ver las denunicas guardadas, incluyendo su título, la descripción de la denuncia y la fecha en que se publicó, esta es una de las tareas principales, por lo que fue implementada.

- En la barra de navegación, en la parte central y siendo la última opción se encuentra "Iniciar sesión", si se selecciona aparecen recuadros en donde se pide el correo y la contraseña, en esta etapa solo se consideran correctos el correo y la contraseña mencionada antes, si no sale un error. Al introducir los datos pedidos, se vuelve a la página principal y el "Iniciar sesión" cambia a "Cerrar sesión", si este último se selecciona se cierra la sesión actual sin necesidad de confirmar y se vuelve al estado inicial.

- Por último, la última opción funcional y otra tarea principal del foro es la opción de "Crear Denuncia", si no se tiene una sesión iniciada sale un error con el mensaje "Debes iniciar sesión para crear una denuncia." y no deja hacer alguna acción, por el contrario, al haber iniciado sesión antes de apretar la opción, se despliegan dos recuadros, uno en donde se puede escribir el título y la descripción de la denuncia, notarse que se puede crear un post vacío. Si se aprieta el botón en la parte inferior de los recuadros, llamado "Crear post", se vuelve a la página inicial y apareceran los mismos posts con denuncias, pero agregando al final la nueva denuncia creada, la fecha y hora son generadas por la página web.


# Running frontend locally

## Precondition
- nodejs 18.12
- npm 9.1.3

### Clone repository
```
git clone https://github.com/2020730032/inf322-2023-2-grupo-7
```

### Cd into frontend folder
```
cd frontend
```

### Install npm packages
```
npm install
```

### Run server
```
npm start
```
