# Tarea Evaluable Tema 5 DWEC - DIW

## Autor

- **Nombre del Autor:** Alvaro Fonseca Hernández<!-- - **Correo Electrónico:** tu.email@example.com -->
- **GitHub:** [AF0ns3ca](https://github.com/AF0ns3ca/op-sass.git)
- **Link:** https://onepiecemaniasass.netlify.app/

## New Features
1. Estilos en sass
2. Video como fondo
3. Slider con ventana modal
4. Modo oscuro en todos los templates con peristencia en localstorage

## Proyecto
Extension del proyecto one-piece-form al que añadimos un video en lugar de la hero-image y un slider de fotografías que al hacer click, se abre un modal en el que se ve la foto en pantalla completa (En móvil la foto se ve pequeña porque esta puesto para que tenga una anchura de un 70% de la pantalla) con el fondo oscurecido. Al hacer click otra vez en cualquier lugar se cerrará. La funcion de abrir la imagen más grande solo se podrá hacer con la imagen que en ese momento este en el centro del slider. 

Por otra parte se ha implementado un boton para modo oscuro en todos los templates de la pagina, que a su vez tiene persistencia en localstorage, es decir que la pagina recordará dentro de los limites de la funcionalidad del localstorage, si el modo oscuro estaba activado o no, permitiendo cambiar entre pestañas manteniendose a traves de ellas, se encuentra en el header junto al titulo. 

En cuanto al port a sass, se ha intentado modular de manera correcta y transformarlo sin alterar en gran medida los estilos que había anteriormente, de ahi el uso de root en lugar de variables de sass. Se mantiene la funcionalidad que había en el proyecto anterior asi como la responsividad que ya había sido implementada con anterioridad.