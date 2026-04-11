<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.mx-lg-4
            p.mb-0 La agricultura urbana se ha consolidado como una alternativa sostenible para la producción de alimentos en espacios reducidos, permitiendo no solo el aprovechamiento eficiente de recursos, sino también la generación de sistemas productivos adaptados a las dinámicas de los entornos urbanos. Sin embargo, el éxito de estos sistemas no depende únicamente de un adecuado establecimiento del cultivo, sino también de su correcto mantenimiento, control y evaluación a lo largo de su ciclo productivo.
            br 
            br
            p.mb-0 En este sentido, las labores de mantenimiento del cultivo constituyen un proceso fundamental que garantiza el desarrollo adecuado de las plantas, optimizando factores como el riego, la nutrición y el manejo de las condiciones ambientales. La aplicación de criterios técnicos en estas actividades permite prevenir problemas asociados al estrés hídrico, deficiencias nutricionales y la proliferación de plagas y enfermedades, asegurando así la sostenibilidad y productividad del sistema agrícola urbano.

    .cajon.color-acento-botones.p-4.mb-5
      p.mb-4 De igual manera, la implementación de normas de seguridad y salud en el trabajo, junto con el cumplimiento de la normativa ambiental y fitosanitaria, se convierte en un aspecto esencial dentro de la producción agrícola. Estas regulaciones orientan el uso responsable de los recursos, el manejo adecuado de residuos y la aplicación controlada de agroinsumos, contribuyendo a la protección del medio ambiente, la salud humana y la calidad de los productos obtenidos.
      p.mb-0 Por otra parte, el control y seguimiento del proceso productivo permiten evaluar el desempeño del sistema agrícola, identificar oportunidades de mejora y tomar decisiones informadas. El uso de registros, la ejecución de labores culturales y el análisis de indicadores productivos facilitan la gestión eficiente del cultivo, fortaleciendo la capacidad del productor para optimizar resultados y garantizar la calidad de la producción.
    
    p.mb-4 Se desarrollan competencias necesarias para realizar el mantenimiento, control y evaluación de cultivos en sistemas de agricultura urbana, aplicando criterios técnicos, normativos y ambientales. A través del estudio teórico y la práctica, se busca fortalecer habilidades orientadas a la gestión eficiente de los sistemas productivos, promoviendo prácticas sostenibles y responsables.
    p.mb-5 De esta manera, la formación contribuye a la preparación de aprendices capaces de implementar, monitorear y mejorar sistemas de producción agrícola en entornos urbanos, fomentando la seguridad alimentaria, el uso adecuado de los recursos y el compromiso con el desarrollo sostenible de las comunidades.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 


</template>

<script>
export default {
  name: 'Introduccion',
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
