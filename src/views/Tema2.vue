<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Control y evaluación del proceso productivo 
    
    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.mx-lg-4
        p.mb-0 La evaluación del proceso productivo consiste en el análisis sistemático de las actividades agrícolas con el fin de verificar el cumplimiento del plan de producción, identificar mejoras y garantizar la eficiencia del sistema. En agricultura urbana, esta evaluación permite optimizar recursos, mejorar la calidad de los cultivos y asegurar prácticas sostenibles.
        br
        br
        p.mb-0 Uno de los elementos clave en este proceso es el registro de información, ya que permite llevar control, hacer seguimiento y tomar decisiones basadas en datos reales.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Registros y seguimiento 
    
    p.mb-5(data-aos="fade-right") Los registros del proceso productivo son documentos o formatos donde se consigna información relevante sobre las actividades agrícolas, como siembra, riego, fertilización, control de plagas y cosecha. Estos registros son fundamentales para el seguimiento, control y evaluación del sistema productivo.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia

    p.mb-4(data-aos="fade-right") El registro de información permite organizar y analizar el proceso productivo de manera técnica, facilitando el control y mejora continua del sistema.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 7.
          | Importancia de los registros del proceso productivo
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-7
        .tabla-a.tab5
          table
            thead
              tr
                th Importancia técnica
                th En agricultura urbana
            tbody
              tr
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-4
                      i.fas.fa-leaft
                      p.mb-0 Permite hacer seguimiento a las actividades realizadas.
                    li.d-flex.mb-4
                      i.fas.fa-leaft
                      p.mb-0 Facilita la toma de decisiones.
                    li.d-flex.mb-4
                      i.fas.fa-leaft
                      p.mb-0 Identifica fallas o problemas en el cultivo.
                    li.d-flex.mb-4
                      i.fas.fa-leaft
                      p.mb-0 Mejora la planificación del proceso productivo.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Permite evaluar resultados y productividad.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-4
                      i.fas.fa-leaft
                      p.mb-0 Optimiza el uso de recursos (agua, insumos, espacio).
                    li.d-flex.mb-4
                      i.fas.fa-leaft
                      p.mb-0 Permite replicar buenas prácticas.
                    li.d-flex.mb-4
                      i.fas.fa-leaft
                      p.mb-0 Favorece el aprendizaje práctico.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Contribuye a la sostenibilidad del sistema.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Valor estratégico de los registros

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Transforman datos en información útil")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Cada registro captura momentos específicos del cultivo: fecha de siembra, cantidad de agua aplicada, observaciones sobre plagas, resultados de cosecha. Esta información, al organizarse y analizarse, se convierte en conocimiento que guía decisiones futuras.
          .tarjeta.color-a.p-4(titulo="Permiten medir progreso")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Al comparar registros de diferentes períodos, se identifica si el cultivo está creciendo adecuadamente, si el riego es suficiente, o si hay cambios en la presencia de plagas.
          .tarjeta.color-a.p-4(titulo="Aseguran trazabilidad")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Cada actividad realizada queda documentada, permitiendo rastrear cuándo y cómo se hizo, quién la ejecutó, y con qué resultados. Esto es crítico para garantizar calidad y cumplimiento normativo.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Tipos de registros

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/3.png', alt='')
      .col-lg-8
        .bg22.p-lg-5.p-4.h-100.he
          img.mb-4.img-t.d-none.d-lg-block.mx-lg-4.my-lg-4(src='@/assets/curso/tema2/4.svg', alt='')
          p.mb-0.mx-lg-4 Existen diferentes tipos de registros según la actividad que se desee controlar. Cada tipo de registro captura información específica que permite hacer seguimiento detallado de un aspecto particular del cultivo.

    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center(titulo="Registro de siembra")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Fecha de siembra.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Tipo de cultivo.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Cantidad de semillas.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Ubicación.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/5.png')
      .row.justify-content-center.align-items-center(titulo="Registro de riego")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Frecuencia de riego.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Cantidad de agua aplicada.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Método de riego.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/6.png')
      .row.justify-content-center.align-items-center(titulo="Registro de fertilización")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Tipo de fertilizante.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Dosis aplicada.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Fecha de aplicación.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/7.png')
      .row.justify-content-center.align-items-center(titulo="Registro fitosanitario")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Presencia de plagas o enfermedades.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Tipo de control aplicado.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Productos utilizados.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/8.png')
      .row.justify-content-center.align-items-center(titulo="Registro de cosecha")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Fecha de recolección.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Cantidad producida.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Calidad del producto.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/9.png')
      .row.justify-content-center.align-items-center(titulo="Registro de condiciones ambientales")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Temperatura.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Humedad.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Condiciones climáticas.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/10.png')

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Formas de diligenciamiento

    p.mb-4(data-aos="fade-right") El diligenciamiento de los registros debe realizarse de manera clara, ordenada y constante para garantizar que la información sea útil y confiable.

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/11.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.tem2.mb-0
          .tarjeta.color-a.p-4(titulo="Formatos de registro")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Cuadernos de campo: libretas portátiles donde anotar observaciones en tiempo real.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0  Formatos impresos: hojas preparadas con campos específicos para cada tipo de actividad.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Tablas o listas: estructuras simples con columnas para datos ordenados.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Registros digitales (Excel o aplicaciones): herramientas tecnológicas que facilitan cálculos y análisis.
          .tarjeta.color-a.p-4(titulo="Recomendaciones para diligenciar correctamente")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Registrar la información de forma inmediata: no esperar días para anotar lo sucedido, pues se olvidan detalles.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Utilizar letra clara y legible: otra persona debe poder leer y entender el registro.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Evitar tachones o inconsistencias: si hay error, tachar limpiamente una sola vez.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Usar unidades de medida correctas: litros para agua, gramos para fertilizante, metros para distancias.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Mantener los registros organizados: guardar en carpetas o cuadernos destinados a este fin.
          .tarjeta.color-a.p-4(titulo="Frecuencia de registro")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Diario (riego, observación): actividades que suceden todos los días.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Semanal (crecimiento, control): seguimiento de cambios más lentos.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Por actividad (siembra, fertilización, cosecha): eventos específicos que ocurren en momentos determinados.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Uso de la información registrada
    
    p.mb-4(data-aos="fade-right") La información registrada debe ser analizada para mejorar el proceso productivo. Los datos que registramos cobran valor cuando los usamos para tomar decisiones informadas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4(titulo="Aplicaciones de los registros")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema2/12.png', alt='')
              .col-lg-7.order-lg-1.order-md-1.order-1.mb-lg-0.mb-4
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Evaluar el rendimiento del cultivo: comparar producción esperada vs. producción real.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Identificar problemas recurrentes: ver si ciertos problemas se repiten en patrones.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Ajustar prácticas agrícolas: cambiar técnicas si los resultados no son satisfactorios.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Planificar nuevas siembras: usar información anterior para mejorar planificación futura.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Optimizar recursos: reducir agua, insumos o tiempo si los registros muestran exceso.
          .p-lg-5.p-4(titulo="Toma de decisiones basada en registros")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema2/13.png', alt='')
              .col-lg-7.order-lg-1.order-md-1.order-1.mb-lg-0.mb-4
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Modificar la frecuencia de riego: si los registros muestran sequedad o exceso de humedad.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Cambiar insumos utilizados: si ciertos fertilizantes o plaguicidas no funcionan.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Ajustar distancias de siembra: si hay problemas de espacio o competencia.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Implementar controles fitosanitarios: si se detectan patrones de plagas o enfermedades.
          .p-lg-5.p-4(titulo="Mejora continua a través de registros")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema2/14.png', alt='')
              .col-lg-7.order-lg-1.order-md-1.order-1.mb-lg-0.mb-4
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Comparar resultados entre ciclos productivos: cada cosecha anterior es una lección.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Identificar buenas prácticas: replicar lo que funciona bien.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 Corregir errores: evitar repetir lo que no funcionó.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Incrementar productividad: mejora gradual basada en datos reales.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Ejemplo práctico de uso de registros
    
    p.mb-4(data-aos="fade-right") Los siguientes son ejemplos de cómo los registros generan decisiones:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Decisiones basadas en registros del cultivo
        .tabla-a
          table
            thead
              tr
                th Actividad
                th Fecha
                th Observación
                th Acción tomada
            tbody
              tr
                td Riego
                td 15/03
                td Suelo seco
                td Aumentar frecuencia
              tr
                td Control de plagas
                td 17/03
                td Presencia de insectos
                td Aplicación de biocontrol
              tr
                td Cosecha
                td 26/03
                td Buena producción
                td Mantener manejo

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Seguimiento del proceso productivo

    p.mb-5(data-aos="fade-right") El seguimiento del proceso productivo consiste en la observación, registro y análisis continuo de las actividades y resultados del cultivo, con el fin de verificar su desarrollo, identificar problemas y tomar decisiones oportunas. En la agricultura urbana, el seguimiento es fundamental debido a la variabilidad de las condiciones (espacio, clima, sustrato), lo que exige un control constante para garantizar la eficiencia del sistema productivo.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia del seguimiento
    
    p.mb-4(data-aos="fade-right") El seguimiento permite evaluar si el cultivo se está desarrollando de acuerdo con lo planificado, proporcionando información valiosa para la toma de decisiones.

    .row.justify-content-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/15.svg')
          h3.mb-4.text-center Importancia técnica
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Permite detectar problemas de manera oportuna.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Facilita el control del proceso productivo.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Mejora la calidad del cultivo.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 ptimiza el uso de recursos.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Permite evaluar resultados.
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/16.svg')
          h3.mb-4.text-center En agricultura urbana
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Ayuda a adaptar el cultivo a condiciones cambiantes.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Permite ajustar prácticas como riego y fertilización.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Favorece la producción sostenible.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores de seguimiento
    
    p.mb-4(data-aos="fade-right") Los indicadores son variables que permiten medir el estado y desempeño del cultivo. Son datos específicos que se pueden observar, registrar y comparar para evaluar, de manera objetiva, si el cultivo está cumpliendo con lo esperado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Tipos de indicadores de seguimiento del cultivo
        .tabla-a
          table
            thead
              tr
                th Indicadores de crecimiento
                th Indicadores de producción
                th Indicadores de sanidad
                th Indicadores de manejo
            tbody
              tr
                td Altura de la planta
                td Cantidad de cosecha
                td Presencia de plagas
                td Frecuencia de riego
              tr
                td Número de hojas
                td Tamaño de frutos
                td Nivel de afectación
                td Uso de insumos
              tr
                td Desarrollo general
                td Calidad del producto
                td Frecuencia de enfermedades
                td Cumplimiento de actividades

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Características de un buen indicador

    .row.justify-content-center.mb-4.mb-lg-5(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Medible
          p.mb-0 Se puede medir y cuantificar.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Claro
          p.mb-0 Fácil de entender y comunicar.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Relevante
          p.mb-0 Relacionado directamente con los objetivos.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Fácil de interpretar
          p.mb-0 Proporciona información útil para la toma de decisiones.

    .row.fondo2.align-items-center.p-4.mb-5(data-aos="fade-down")
      .col-lg-12.px-4
        .row.justify-content-center.mb-0
          .col-lg-12
            p.mb-0 #[b #[em Pódcast:]] Para comprender cómo los registros convierten observaciones cotidianas en decisiones de manejo del cultivo, se recomienda explorar el pódcast #[b “De la adivinanza a la certeza: registros que controlan tu cultivo”]. En este episodio, se explica la importancia de llevar registros sistemáticos en agricultura urbana, qué información básica debe anotarse y cómo estos datos permiten identificar problemas, reconocer patrones y tomar decisiones informadas.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema2/17.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg12.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.h-100.mb-0
                TarjetaAudio.color-acento-botones.mb-0(
                texto="<em>Pódcast:</em> De la adivinanza a la certeza: registros que controlan tu cultivo"
                :audio="require('@/assets/actividad/audio/end-game-success.mp3')"
                )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Análisis e identificación de problemas

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/18.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.mx-lg-4
        p.mb-0 El análisis e identificación de problemas en el cultivo es un proceso que permite detectar oportunamente las dificultades que afectan el crecimiento, la sanidad y la productividad de las plantas. En la agricultura urbana, este análisis se realiza mediante la observación directa, el uso de registros y la comparación entre los resultados esperados y los obtenidos, con el fin de definir acciones correctivas o preventivas que mejoren el desempeño del sistema productivo.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Análisis del cultivo

    p.mb-4(data-aos="fade-right") El análisis del cultivo consiste en evaluar el estado de las plantas a partir de la observación y los registros, permitiendo identificar si todo está dentro de lo esperado o si hay problemas que requieren atención.

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-right")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/19.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.tem3.mb-0
          .tarjeta.color-a.p-4(titulo="Aspectos a analizar")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 #[b Crecimiento de la planta:] altura, tamaño de hojas.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 #[b Coloración:] hojas verdes (saludable) o amarillas (deficiencias).
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 #[b Estado fitosanitario:] presencia de plagas o enfermedades.
                  li.d-flex.mb-3
                    i.fas.fa-leaf
                    p.mb-0 #[b Desarrollo radicular:] en caso de revisión del sustrato.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 #[b Producción:] cantidad y calidad de frutos.
          .tarjeta.color-a.p-4(titulo="Métodos de análisis y frecuencia")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Métodos:]
                p.mb-0 Observación directa.
                p.mb-0 Comparación con registros anteriores.
                p.mb-4 Uso de indicadores (crecimiento, producción).
                p.mb-0 #[b Frecuencia:]
                p.mb-0 Diaria: observación general.
                p.mb-0 Semanal: análisis más detallado.
                p.mb-0 Por ciclo: evaluación final.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Identificación de problemas

    p.mb-4(data-aos="fade-right") Es el proceso de reconocer las dificultades que afectaron el desarrollo del cultivo. Los problemas pueden ser de naturaleza muy diferente y requieren estrategias distintas para su solución.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 10.
          | Tipos de problemas en el sistema productivo
        .tabla-a.tab6
          table
            thead
              tr
                th Problemas técnicos
                th Problemas fitosanitarios
                th Problemas ambientales
                th Problemas de manejo
            tbody
              tr
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Riego inadecuado.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Mala fertilización.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Presencia de plagas.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Exceso o déficit de humedad.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Mala ventilación.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Falta de registros.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Incumplimiento de labores culturales.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Métodos para identificar problemas

    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Análisis de registros
          p.mb-0 Revisar datos históricos para detectar patrones.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Observación directa
          p.mb-0 Examinar el cultivo visualmente en detalle.
      .col-lg-4.col-md-6
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Comparación con resultados esperados
          p.mb-0 Evaluar si lo obtenido se ajusta a lo planificado.


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Mejora continua e implementación de acciones

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/20.png', alt='')
      .col-lg-8
        .bg22.p-lg-5.p-4.h-100.hei
          img.mb-4.img-t.d-none.d-lg-block.mx-lg-4.my-lg-4(src='@/assets/curso/tema2/21.svg', alt='')
          p.mb-0.mx-lg-4 La mejora continua del sistema productivo se logra mediante un ciclo permanente de observación, análisis y acción. Este proceso requiere seguimiento constante del cultivo, identificación oportuna de problemas y evaluación sistemática de resultados. En agricultura urbana, donde el espacio es limitado y las condiciones son variables, esta mejora continua es fundamental para garantizar cultivos sanos, productivos y sostenibles.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Control del proceso productivo

    p.mb-4(data-aos="fade-right") El control del proceso productivo consiste en aplicar acciones correctivas o preventivas para garantizar el adecuado desarrollo del cultivo. El control puede ser de dos tipos: preventivo (antes de que ocurra el problema) o correctivo (cuando ya existe un problema).

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/22.png', alt='')
      .col-lg-7
        TabsA.color-acento-botones.tem4.mb-0
          .tarjeta.color-a.p-4(titulo="Tipos de control")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Control preventivo]
                p.mb-4 Evita problemas antes de que ocurran.
                p.mb-0 #[b Control correctivo]
                p.mb-0 Actúa cuando ya existe un problema.
          .tarjeta.color-a.p-4(titulo="Acciones de control y herramientas")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Acciones de control:]
                p.mb-0 Ajustar la frecuencia de riego.
                p.mb-0 Modificar la fertilización.
                p.mb-0 Aplicar control de plagas.
                p.mb-4 Reorganizar el espacio del cultivo.
                p.mb-0 #[b Herramientas:]
                p.mb-0 Registros del proceso productivo.
                p.mb-0 Observación directa.
                p.mb-0 Indicadores de desempeño.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Toma de decisiones

    p.mb-4(data-aos="fade-right") La toma de decisiones es el proceso mediante el cual se definen acciones a partir del análisis del seguimiento. Las decisiones deben basarse siempre en información real (registros e indicadores) y no en suposiciones.

    .row.justify-content-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/23.svg')
          h3.mb-4.text-center Tipos de decisiones
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Técnicas:] riego, fertilización.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Productivas:] siembra, cosecha.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Correctivas:] control de plagas.
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/24.svg')
          h3.mb-4.text-center Ejemplos de decisiones
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Aumentar riego por sequedad del sustrato.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Aplicar fertilizante por deficiencia nutricional.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Implementar control biológico ante plagas.

    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Proceso de toma de decisiones 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        PasosA.color-primario.mb-0(tipo="l")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              p.mb-0 Recolección de información (registros).
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/25.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/26.svg', alt='Texto que describa la imagen')
            .col-lg-7.text-end
              p.mb-0 Análisis del cultivo.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.text-start
              p.mb-0 Identificación del problema.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/27.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/28.svg', alt='Texto que describa la imagen')
            .col-lg-7.text-end
              p.mb-0 Selección de la solución.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.text-start
              p.mb-0 Aplicación de la acción.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/29.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/30.svg', alt='Texto que describa la imagen')
            .col-lg-7.text-end
              p.mb-0 Evaluación del resultado.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia de la toma de decisiones

    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          p.mb-0.text-center Mejora la eficiencia productiva.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          p.mb-0.text-center Reduce pérdidas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4.mb-md-0
        .bg7.p-4.h-100
          p.mb-0.text-center Optimiza recursos.
      .col-lg-3.col-md-6.mb-lg-0.mb-0.mb-md-0
        .bg7.p-4.h-100
          p.mb-0.text-center Permite mejora continua.


    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Evaluación del sistema productivo

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/31.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.mx-lg-4
        p.mb-0 La evaluación del sistema productivo es el proceso mediante el cual se analizan los resultados obtenidos en el cultivo, comparándolos con lo planificado, con el fin de determinar su eficiencia, identificar fallas y proponer mejoras. En la agricultura urbana, esta evaluación permite verificar si las prácticas aplicadas fueron adecuadas y si el sistema es sostenible, productivo y acorde a criterios técnicos y ambientales.
    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Criterios de evaluación
    
    p.mb-4(data-aos="fade-right") Los criterios de evaluación son los aspectos que se tienen en cuenta para valorar el desempeño del sistema productivo. Existen cuatro tipos principales de criterios que deben considerarse de manera integral.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.mb-lg-0.mb-4
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Criterios técnicos")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Crecimiento adecuado de las plantas.
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Cumplimiento de prácticas agrícolas (riego, fertilización, control).
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Estado fitosanitario del cultivo.
                .col-lg-6.d-none.d-lg-block
                  img(src='@/assets/curso/tema2/33.png', alt='')
          .row.align-items-center(titulo="Criterios productivos")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Cantidad de producción obtenida.
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Calidad de los productos (tamaño, color, sanidad).
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Rendimiento del cultivo.
                .col-lg-6.d-none.d-lg-block
                  img(src='@/assets/curso/tema2/34.png', alt='')
          .row.align-items-center(titulo="Criterios ambientales")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Uso eficiente del agua.
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Manejo adecuado de residuos.
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Reducción de agroquímicos.
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Aplicación de prácticas sostenibles.
                .col-lg-6.d-none.d-lg-block
                  img(src='@/assets/curso/tema2/35.png', alt='')
          .row.align-items-center(titulo="Criterios económicos")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Uso eficiente de insumos.
                    li.d-flex.mb-3
                      i.fas.fa-check.t11
                      p.mb-0 Relación costo-beneficio.
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Aprovechamiento de recursos disponibles.
                .col-lg-6.d-none.d-lg-block
                  img(src='@/assets/curso/tema2/36.png', alt='')
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema2/32.svg', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Comparación con plan de producción
    
    p.mb-4(data-aos="fade-right") La evaluación implica comparar los resultados reales con lo que se había planificado, permitiendo medir el nivel de cumplimiento e identificar desviaciones.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 11.
          | Ejemplo de comparación de resultados con plan de producción
        .tabla-a.tab7
          table
            thead
              tr
                th Aspecto
                th Planificado
                th Resultado
                th Evaluación
            tbody
              tr
                td Producción
                td 10 kg
                td 8 kg
                td Bajo rendimiento
              tr
                td Riego
                td Diario
                td Intermitente
                td Falta de control
              tr
                td Plagas
                td No previstas
                td Presencia alta
                td Manejo insuficiente

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia de la comparación

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/37.svg' alt='AvatarTop')
          p.mb-0.text-center Permite medir el nivel de cumplimiento.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/38.svg' alt='AvatarTop')
          p.mb-0.text-center Identifica desviaciones en el proceso.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/39.svg' alt='AvatarTop')
          p.mb-0.text-center Facilita la mejora del sistema.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Propuestas de mejora

    p.mb-4(data-aos="fade-right") Las propuestas de mejora son acciones diseñadas para corregir fallas y optimizar el sistema productivo. Deben ser prácticas, viables y orientadas a resultados concretos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 12.
          | Tipos de mejoras para el sistema productivo
        .tabla-a.tab6
          table
            thead
              tr
                th Mejoras técnicas
                th Mejoras productivas
                th Mejoras ambientales
                th Mejoras de gestión
            tbody
              tr
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Ajustar frecuencia de riego.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Mejorar el tipo de sustrato.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Seleccionar cultivos más adaptados.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Mejorar la densidad de siembra.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Implementar rotación de cultivos.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Reducir uso de químicos.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Implementar compostaje.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Implementar registros más detallados.
                    li.d-flex.mb-0
                      i.fas.fa-leaft
                      p.mb-0 Mejorar el seguimiento del cultivo.

    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Enfoque de mejora continua (ciclo permanente)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        PasosA.color-primario.mb-0(tipo="n")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              p.mb-0 Evaluar resultados del ciclo anterior.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/40.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/41.svg', alt='Texto que describa la imagen')
            .col-lg-7.text-end
              p.mb-0 Identificar errores y oportunidades de mejora.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.text-start
              p.mb-0 Aplicar mejoras en el nuevo ciclo.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/42.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/43.svg', alt='Texto que describa la imagen')
            .col-lg-7.text-end
              p.mb-0 Volver a evaluar para iniciar el ciclo nuevamente.
    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Consecuencias de no evaluar el sistema

    .row.justify-content-center.align-items-stretch.mb-lg-0(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/44.svg' alt='AvatarTop')
          h4.mb-4.text-center Repetición de errores
          p.mb-0 Sin evaluación, se cometen los mismos errores ciclo tras ciclo.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/45.svg' alt='AvatarTop')
          h4.mb-4.text-center Baja productividad
          p.mb-0 Sin aprendizaje, no hay mejora en los resultados.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/46.svg' alt='AvatarTop')
          h4.mb-4.text-center Pérdida de recursos
          p.mb-0 Dinero, tiempo y esfuerzo se desperdician sin rumbo.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/47.svg' alt='AvatarTop')
          h4.mb-4.text-center Sanciones legales
          p.mb-0 Sin datos, es imposible saber qué está sucediendo.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
