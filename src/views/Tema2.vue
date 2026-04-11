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
    
    p.mb-5 Los registros del proceso productivo son documentos o formatos donde se consigna información relevante sobre las actividades agrícolas, como siembra, riego, fertilización, control de plagas y cosecha. Estos registros son fundamentales para el seguimiento, control y evaluación del sistema productivo.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia

    p.mb-5 El registro de información permite organizar y analizar el proceso productivo de manera técnica, facilitando el control y mejora continua del sistema.

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
                  p.mb-4 • Permite hacer seguimiento a las actividades realizadas.
                  p.mb-4 • Facilita la toma de decisiones.
                  p.mb-4 • Identifica fallas o problemas en el cultivo.
                  p.mb-4 • Mejora la planificación del proceso productivo.
                  p.mb-0 • Permite evaluar resultados y productividad.
                td
                  p.mb-4 • Optimiza el uso de recursos (agua, insumos, espacio).
                  p.mb-4 • Permite replicar buenas prácticas.
                  p.mb-4 • Favorece el aprendizaje práctico.
                  p.mb-0 • Contribuye a la sostenibilidad del sistema.
      .col-lg-5
        img(src='@/assets/curso/tema2/2.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Valor estratégico de los registros

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
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
    
    h4.mb-5 Tipos de registros

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4
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
              p.mb-0 • Fecha de siembra.
              p.mb-0 • Tipo de cultivo.
              p.mb-0 • Cantidad de semillas.
              p.mb-0 • Ubicación.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/5.png')
      .row.justify-content-center.align-items-center(titulo="Registro de riego")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              p.mb-0 • Frecuencia de riego.
              p.mb-0 • Cantidad de agua aplicada.
              p.mb-0 • Método de riego.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/6.png')
      .row.justify-content-center.align-items-center(titulo="Registro de fertilización")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              p.mb-0 • Tipo de fertilizante.
              p.mb-0 • Dosis aplicada.
              p.mb-0 • Fecha de aplicación.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/7.png')
      .row.justify-content-center.align-items-center(titulo="Registro fitosanitario")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              p.mb-0 • Presencia de plagas o enfermedades.
              p.mb-0 • Tipo de control aplicado.
              p.mb-0 • Productos utilizados.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/8.png')
      .row.justify-content-center.align-items-center(titulo="Registro de cosecha")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              p.mb-0 • Fecha de recolección.
              p.mb-0 • Cantidad producida.
              p.mb-0 • Calidad del producto.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/9.png')
      .row.justify-content-center.align-items-center(titulo="Registro de condiciones ambientales")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-lg-0.mb-4
              p.mb-0 • Temperatura.
              p.mb-0 • Humedad.
              p.mb-0 • Condiciones climáticas.
            .col-lg-8.col-md-8.col-10
              img(src='@/assets/curso/tema2/10.png')

    h4.mb-5 Formas de diligenciamiento

    p.mb-5 El diligenciamiento de los registros debe realizarse de manera clara, ordenada y constante para garantizar que la información sea útil y confiable.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        img(src='@/assets/curso/tema1/78.png', alt='')
      .col-lg-7
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Según condiciones del entorno")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-2 
                p.mb-2 
                p.mb-2 
                p.mb-0 
          .tarjeta.color-a.p-4(titulo="Según condiciones del entorno")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-2 
                p.mb-2 
                p.mb-2 
                p.mb-0 
          .tarjeta.color-a.p-4(titulo="Según condiciones del entorno")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-2 
                p.mb-2 
                p.mb-2 
                p.mb-0 










    
    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Análisis e identificación de problemas




    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Mejora continua e implementación de acciones




    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Evaluación del sistema productivo




















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
