# Contribuir a Responsive Cat

Si has usado [Responsive Cat](http://responsivecat.com) y te gusta el proyecto, hay un montón de maneras en las que puedes ayudar!

Este documento tiene el fin de establecer los pasos, directrices y mejores practicas para hacer una contribución, este proceso tiene como fin ser fácil y eficaz para todos los involucrados.

_continuar_  
Siguiendo estas pautas ayuda a comunicar que se respete el tiempo de los desarrolladores de la gestión y el desarrollo de este proyecto de código abierto. A cambio, ellos deben corresponder a este respecto en el tratamiento de su problema o evaluar parches y características.


## Utilizando el seguimiento de incidencias

El [seguimiento de incidencias] (https://github.com/h5bp/html5-boilerplate/issues) es
el canal preferido para [informes de errores] (# bichos), [Características solicitudes] (# características)
y [la presentación de solicitudes de extracción] (# pull-demandas), pero por favor, respete las siguientes
restricciones:

* Por favor, ** no ** utilizar el gestor de incidencias para solicitudes de apoyo personal (uso
  [Desbordamiento de pila] (https://stackoverflow.com/questions/tagged/html5boilerplate)).

* Por favor, ** no ** descarrilar o duende cuestiones. Mantenga la discusión dentro del tema y
  respetar las opiniones de los demás.

* Por favor, no haga ** ** cuestiones abiertas o tirar de las solicitudes en relación con el código en
  [`.htaccess`] (https://github.com/h5bp/server-configs-apache),
  [`jQuery`] (https://github.com/jquery/jquery/),
  [`Modernizr`] (https://github.com/Modernizr/Modernizr) o
  [`Normalize.css`] (https://github.com/necolas/normalize.css) (abrirlos en
  sus respectivos repositorios).


<a name="bugs"> </a>
## Los informes de fallos

Un error es un problem_ _demonstrable que es causada por el código en el repositorio.
Los buenos informes de errores son extremadamente útiles - ¡gracias!

Directrices para los informes de errores:

1. ** Utilice la búsqueda tema GitHub ** & mdash; comprobar si el problema ya ha sido
   reportado.

2. ** Compruebe si el problema se ha solucionado ** & mdash; tratar de reproducirlo mediante el
   última `master 'o desarrollo de la rama en el repositorio.

3. ** Aislar el problema ** & mdash; idealmente crear un [reducido de ensayos
   caso] (https://css-tricks.com/reduced-test-cases/) y un ejemplo vivo.

Un buen reporte de error no se debe dejar a otros que necesitan persiguen que por más
información. Por favor, trate de ser lo más detallado posible en su informe. Que es
su entorno? ¿Qué medidas va a reproducir el problema? ¿Qué navegador (s) y OS
experimentar el problema? ¿Qué le espera a ser el resultado? Todos esos
detalles ayudarán a la gente para arreglar cualquier error potenciales.

Ejemplo:

> Ejemplo corto y descriptivo informe de error del título
>
> Un resumen de la cuestión y el entorno del navegador / OS en el que ocurre. Si
> Adecuado, incluir los pasos necesarios para reproducir el error.
>
> 1. Este es el primer paso
> 2. Este es el segundo paso
> 3. Otras medidas, etc.
>
> `<Url>` - un enlace para el caso de prueba reducida
>
> Cualquier otra información que quieres compartir que es relevante para el tema de ser
> Reportado. Esto podría incluir las líneas de código que usted ha identificado como
> Causando el error y posibles soluciones (y sus opiniones sobre su
> Méritos).


<a name="features"> </a>
## Solicitudes de funciones

Peticiones son bienvenidos. Pero tome un momento para averiguar si su idea
encaja con el alcance y los objetivos del proyecto. Todo depende de usted * * a hacer una fuerte
caso para convencer a los desarrolladores del proyecto de los méritos de esta función. Por favor
proporcionar el mayor detalle y el contexto de lo posible.


<a name="pull-requests"> </a>
## Peticiones y jalar

Buenas peticiones de tracción - parches, mejoras, nuevas características - son una fantástica
Ayuda. Ellos deben permanecer enfocado en su alcance y evitar que contiene no relacionada
comete.

** Por favor, pregunte primero ** antes de emprender cualquier solicitud de extracción significativa (por ejemplo,
implementar características, refactorización de código, la migración a otro idioma),
de lo contrario corre el riesgo de pasar mucho tiempo trabajando en algo que el
los desarrolladores de proyectos podrían no querer fundirse en el proyecto.

Por favor, adherirse a las convenciones de codificación utilizados en un proyecto (sangría,
acertados comentarios, etc.) y otros requisitos (como cobertura de la prueba).

Al cumplir con el siguiente proceso es la mejor manera de conseguir su trabajo
incluidas en el proyecto:

1. [Tenedor] (https://help.github.com/articles/fork-a-repo/) el proyecto, clonar su
   tenedor, y configurar los controles remotos:

   `` `fiesta
   # Clonar el tenedor del repo en el directorio actual
   git clone https://github.com/<your-username>/html5-boilerplate.git
   # Navegue hasta el directorio recién clonado
   cd html5-repetitivo
   # Asignar el repositorio original a una llamada remota "aguas arriba"
   git remote add upstream https://github.com/h5bp/html5-boilerplate.git
   `` `

2. Si clonado hace un tiempo, obtén los últimos cambios de aguas arriba:

   `` `fiesta
   master git checkout
   git pull principal aguas arriba
   `` `

3. Crear una nueva rama del tema (de la principal rama de desarrollo del proyecto) a
   contener su función, cambiar o corregir:

   `` `fiesta
   git checkout -b <tema-nombre-sucursal>
   `` `

4. Comprometerse los cambios en trozos lógicos. Por favor, se adhieren a estos [git commit
   directrices de mensajes] (http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   o su código es poco probable se fusionó con el proyecto principal. Uso de Git
   [rebase interactivo] (https://help.github.com/articles/about-git-rebase/)
   presentará para poner en orden sus confirmaciones antes de hacerlos públicos.

5. A nivel local fusionarse (o rebase) la rama de desarrollo aguas arriba en su rama tema:

   `` `fiesta
   git pull [--rebase] master aguas arriba
   `` `

6. Empuje su sucursal tema hasta su tenedor:

   `` `fiesta
   origen git push <tema-nombre-sucursal>
   `` `

7. [Abre una solicitud de extracción] (https://help.github.com/articles/using-pull-requests/)
    con un título y una descripción clara.

** IMPORTANTE **: Al enviar un parche, usted está de acuerdo para que el proyecto
propietarios de licencia de su trabajo bajo los términos de la [Licencia MIT] (license.txt).
