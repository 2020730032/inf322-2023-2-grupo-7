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


# Usuario experto: Cristobal Alvarez.

### Tareas realizadas por el usuario experto

1- Crear un post

**Descripción tarea**: Esta acción solo puede ser realizada al tener una cuenta, por lo que antes de poder hacerlo, se inicia sesión en la cuenta hardcoreada. Para crea un post, se empieza desde la ventana de inicio y se debe seleccionar el botón de "Crear Post", eso lleva a una ventana, en donde se le pide al usuario, un título, la descripción. Si por lo menos se escribió un título y una descripción, al apretar el boton de "Crear Post", se volverá a la ventana inicial, pero en la sección de posts se podrá observar el post creado junto con la fecha y hora.

2- Ver una publicación

**Descripción tarea**: Al empezar desde la ventana de inicio, el usuario observa la sección de posts recientes donde hay un listado de posts. Como estamos en una etapa temprana de la interfaz, todavia falta implementar lo que sucede al momento de seleccionar el título del post, que es acceder al post, desplegando en pantalla el usuario, titulo y fecha del post, junto con su contenido, likes y los comentarios.

3- Crear una cuenta

**Descripción tarea**: De igual forma, a partir de la ventana de inicio, se debe seleccionar el botón de "Iniciar sesión", lo que llevará a una ventana en donde se pide correo y contraseña del usuario y al ingresar la cuenta hardcoreada lleva a una nueva ventana con la sesion iniciada. Luego de hacer click en "iniciar sesión" se volverá a la ventana inicial, pero se podrá ver la imagen del usuario en la parte superior en donde ahora aparecerá "cerrar sesión".

<h4> Heuristicas: </h4>

1. Consistencia y estándares: Si cumple. Esto se debe a que la pagina es consistente en todas sus secciones y sigue los estandares de tener un texto breve de ejemplo y en las pestañas en donde se deben mostrar las denuncias estan alineadas y centradas.
2. Similitud entre el sistema y el mundo real: Si cumple. Utilizan logos que hacen referencia a cosas del mundo real, como los de inicio de sesion, cerrar sesion, etc.
3. Diseño estético y minimalista: Si cumple. El diseño es estético y minimalista debido a que la navbar es resumida, hay un uso moderado de elementos. Como observacion para un prototipo futuro se recomienda mejorar algunos colores que resaltan poco, como lo es cuando el cursor pasa por encima de las opciones del navbar.

<br>

* <h4> Enlace al repositorio de la pagina web MuniDenuncias: </h4>

**GitHub**: https://github.com/2020730032/inf322-2023-2-grupo-7


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
