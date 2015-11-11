# Contribuir a Responsive Cat

Si has usado [Responsive Cat](http://responsivecat.com) y te gusta el proyecto, hay un montón de maneras en las que puedes ayudar!

Este documento tiene el fin de establecer los pasos, directrices y mejores practicas para hacer una contribución, este proceso tiene como fin ser fácil y eficaz para todos los involucrados.

Estas pautas ayudan a mejorar la comunicacion, gestion y desarrollo de este proyecto ademas de respetar el tiempo de los desarrolladores. Como resultado se optimiza la resolucion de bugs, creacion de parches y desarrollo de nuevas caracteristicas.

## Seguimiento de incidencias

El [seguimiento de incidencias] (https://github.com/ResponsiveCat/ResponsiveCat/issues) es
el canal preferido para [informes de errores] (# bugs), [Solicitud de carateristicas] (# features)
y [la presentacion de solicitudes de implementacion] (# pull-request), para el optimo mantenimiento de incidentes se solicita respetar las siguientes restricciones:

* ** No ** utilizar el gestor de incidencias para solicitudes de soporte personal.

* ** No ** salirse del tema o "trollear" los issues. Mantenga la discusión dentro del tema y se debe respetar la opinión de los demás.

## Informes de fallos

Un error (bug) es un _problema_ _demonstrable_ que es causada por el código en el repositorio.
Los buenos informes de errores son extremadamente útiles - ¡gracias!

Directrices para los informes de errores:

1. ** Utilice la búsqueda de GitHub ** & mdash; Para comprobar si el problema ya ha sido reportado.

2. ** Compruebe si el problema se ha solucionado ** & mdash; tratando de reproducir el error utilizando la rama `master ' o la rama de desarrollo en el repositorio en su ultima versión.

3. ** Aislar el problema ** & mdash; idealmente crear un [reduced-test-cases] (https://css-tricks.com/reduced-test-cases/).

Un buen reporte de error no debe dejar a los desarrolladores con la necesidad de contactarlo para obtener más información. Por favor, trate de ser lo más detallado posible en su informe.
* ¿Que es su entorno?
* ¿Qué medidas va a reproducir el problema?
* ¿Qué navegador (s) y OS experimentar el problema?
* ¿Qué le espera a ser el resultado?
Todos estos detalles ayudarán al desarrollador para corregir el actual y cualquier otro error potencial.

Ejemplo:

> Titulo del informe de error
>
> Un resumen del incidente y el entorno del navegador/sistema operativo en el que ocurre.
> Es de utilidad incluir los pasos necesarios para reproducir el error.
>
> 1. Este es el primer paso
> 2. Este es el segundo paso
> 3. Otras medidas, etc.
>
> `<Url>` - enlace apruebas unitarias o otro tipo de testing
>
> Cualquier otra información que se quiera compartir que sea relevante para el incidente Reportado.
> Esto podría incluir las líneas de código que usted ha identificado como
> causante del error y posibles soluciones (y su opinion y méritos).

## Solicitudes de funcionalidades

Todas las peticiones son bienvenidas. Pero tome un momento para averiguar si su idea
encaja con el alcance y los objetivos del proyecto. Todo depende de * usted * para convencer
a los desarrolladores del proyecto de los méritos de esta función. Por favor
proporcionar el mayor detalle y el contexto de lo posible.

## pull-request

Pull-request con parches, mejoras, nuevas características son de gran ayuda.
Se debe permanecer enfocado al alcance del proyecto y evitar contenido no relacionado.

<continuar>
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
