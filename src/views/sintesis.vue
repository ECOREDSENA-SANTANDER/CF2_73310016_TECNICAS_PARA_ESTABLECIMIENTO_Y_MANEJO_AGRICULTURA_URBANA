<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-right") La comprensión y aplicación de los procesos de mantenimiento, control y evaluación de cultivos en agricultura urbana constituye un elemento fundamental para garantizar sistemas productivos eficientes, sostenibles y técnicamente adecuados. El manejo apropiado del riego, el cumplimiento de normas de seguridad y salud en el trabajo, así como la aplicación de la normativa ambiental y fitosanitaria, permiten desarrollar prácticas agrícolas responsables que protegen tanto la salud humana como el entorno.
    p.mb-0(data-aos="fade-left") Los sistemas de agricultura urbana requieren un seguimiento constante que integre el registro de actividades, la ejecución de labores culturales y el control de las condiciones del cultivo. La organización y análisis de la información productiva facilitan la identificación de comportamientos del sistema, permitiendo ajustar prácticas como la fertilización, el riego y el manejo fitosanitario de acuerdo con las necesidades específicas del cultivo y las condiciones del entorno.
    p.mb-4(data-aos="fade-right") Asimismo, la evaluación del proceso productivo se convierte en una herramienta clave para comparar los resultados obtenidos con el plan de producción, identificar problemas y establecer acciones de mejora. 
    p.mb-4(data-aos="fade-left") El uso de indicadores técnicos, productivos y ambientales permite valorar el desempeño del sistema y orientar la toma de decisiones hacia la optimización de recursos y el incremento de la productividad.
    p.mb-5(data-aos="fade-right") Finalmente, este componente formativo fortalece en el aprendiz las competencias necesarias para realizar el seguimiento, control y evaluación de cultivos en contextos urbanos, promoviendo la mejora continua de los sistemas productivos. De esta manera, se contribuye al desarrollo de prácticas agrícolas sostenibles, al uso eficiente de los recursos y a la producción responsable de alimentos en entornos urbanos.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Sintetiza el tema central: “Mantenimiento, control y evaluación de cultivos en agricultura urbana”. Debajo, al lado izquierdo, se tienen dos bloques principales conectados verticalmente con flechas: “Mantenimiento del cultivo” y “Control y evaluación del proceso productivo”. Del bloque “Mantenimiento del cultivo” se desprenden tres subtemas hacia la derecha: “Riego”, “Manejo normativo” y “Labores culturales y fertilización”. Del bloque “Control y evaluación del proceso productivo” se desprenden cuatro subtemas: “Registros y seguimiento”, “Análisis de problemas”, “Mejora continua” y “Evaluación del sistema productivo”.")
    
    .row.justify-content-center(data-aos="fade-right")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
