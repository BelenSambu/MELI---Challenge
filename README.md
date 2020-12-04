# Challenge Mercado Libre

_Challenge de Frontend para MELI. Se pidió realizar un clon de la página de ofertas, se agregó funcionalidad para filtro por categoría y para el buscador. Este challenge está hecho con React para el lado del cliente y del lado del servidor se usó Node.js con express. Utilicé Create React App para inicializar el template del proyecto del lado del cliente para facilitar y agilizar la configuración, también se uso algunos estilos de un framework conocido llamado Material-UI (https://material-ui.com/), se usó style-components para variar formas de aplicar los estilos. 

## Setup 🚀

_Instalar las dependencias 

```
npm install
```

_Test 

```
npm run test
```

**Client/Server**

_Para levantar la app ejecutar el siguiente comando ( configurado en package.json )_

```
npm run all
```

### Dessarrolo 

_La aplicación está dividida en dos componentes: Toolbar y Products, quienes a su vez tienen vistas con estilos propios para hacerlo más articulado.
La consigna del challenge era darle funcionalidad a la página, tener al menos una. Me centré en el listado de categorías y en el buscador. 
Se me dió un archivo json para extraer algunos datos, el cual usé de forma global, de él extraje algunos campos. Si bien no especificaba en el challenge
usar la API de MELI, consumi la misma para los dos filtros de búsqueda y categorías. Sin embargo al no poder conseguir varios items desde la API sin ponerle una categoría o con id del usuario logeado utilicé los items del json para cargarlos al inicio de la vista del home page. 
Se usó Router para manejar el ruteo de la app, esto se podría dar un mejor uso al agregarle un path para redirigir a cada producto seleccionado por medio de su id.

