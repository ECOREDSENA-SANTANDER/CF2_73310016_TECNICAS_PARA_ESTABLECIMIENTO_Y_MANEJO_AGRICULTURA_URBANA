<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Mantenimiento, control y evaluación de cultivos en agricultura urbana.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión del aprendiz sobre los procesos de mantenimiento, aplicación de normas de seguridad, manejo ambiental y fitosanitario, así como el seguimiento y evaluación del sistema productivo, con el fin de verificar la apropiación de conocimientos técnicos necesarios para una producción agrícola urbana eficiente y sostenible.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'El riego en agricultura urbana tiene como función principal:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar plagas del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suministrar nutrientes sólidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proporcionar agua para el desarrollo de las plantas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la fertilización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 2,
          texto: 'Un exceso de riego puede provocar:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor producción.', esCorrecta: false },
            { id: 'b', texto: 'Pudrición de raíces.', esCorrecta: true },
            { id: 'c', texto: 'Aumento de nutrientes.', esCorrecta: false },
            { id: 'd', texto: 'Mejor aireación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 3,
          texto: 'La humedad del sustrato se refiere a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La temperatura del suelo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La cantidad de agua disponible para la planta.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'El tipo de fertilizante.', esCorrecta: false },
            { id: 'd', texto: 'La cantidad de luz solar.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 4,
          texto: '¿Cuál es un factor técnico del riego?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tipo de cultivo', esCorrecta: true },
            { id: 'b', texto: 'Color de la planta.', esCorrecta: false },
            { id: 'c', texto: 'Altura del contenedor.', esCorrecta: false },
            { id: 'd', texto: 'Tamaño de la hoja.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 5,
          texto: 'Un sistema eficiente de riego en agricultura urbana es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Riego por inundación.', esCorrecta: false },
            { id: 'b', texto: 'Riego por goteo.', esCorrecta: true },
            { id: 'c', texto: 'Riego manual excesivo.', esCorrecta: false },
            { id: 'd', texto: 'Riego sin control.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 6,
          texto: 'Las normas de seguridad en el trabajo buscan:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar la producción.', esCorrecta: false },
            { id: 'b', texto: 'Reducir costos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Prevenir accidentes y enfermedades.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Controlar el clima.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 7,
          texto: 'Un elemento de protección personal (EPP) es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Regadera.', esCorrecta: false },
            { id: 'b', texto: 'Guantes.', esCorrecta: true },
            { id: 'c', texto: 'Fertilizante.', esCorrecta: false },
            { id: 'd', texto: 'Semilla.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 8,
          texto: 'Un riesgo ergonómico en agricultura urbana es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de plaguicidas.', esCorrecta: false },
            { id: 'b', texto: 'Exposición al sol.', esCorrecta: false },
            { id: 'c', texto: 'Posturas inadecuadas.', esCorrecta: true },
            { id: 'd', texto: 'Exceso de agua.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 9,
          texto: 'La normativa ambiental tiene como objetivo:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incrementar la producción.', esCorrecta: false },
            { id: 'b', texto: 'Regular precios.', esCorrecta: false },
            { id: 'c', texto: 'Reducir mano de obra.', esCorrecta: false },
            { id: 'd', texto: 'Proteger el medio ambiente.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 10,
          texto: 'Un residuo orgánico es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Botella plástica.', esCorrecta: false },
            { id: 'b', texto: 'Envase químico.', esCorrecta: false },
            { id: 'c', texto: 'Restos de plantas.', esCorrecta: true },
            { id: 'd', texto: 'Metal.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 11,
          texto: 'La normativa fitosanitaria se encarga de:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Controlar el clima.', esCorrecta: false },
            { id: 'b', texto: 'Regular la sanidad vegetal.', esCorrecta: true },
            { id: 'c', texto: 'Medir la producción.', esCorrecta: false },
            { id: 'd', texto: 'Controlar el riego.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 12,
          texto: 'El uso inadecuado de plaguicidas puede generar:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor producción.', esCorrecta: false },
            { id: 'b', texto: 'Contaminación ambiental.', esCorrecta: true },
            { id: 'c', texto: 'Mejor crecimiento.', esCorrecta: false },
            { id: 'd', texto: 'Mayor calidad', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 13,
          texto: 'Los registros del proceso productivo permiten:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Decorar el cultivo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Llevar control de las actividades.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Aumentar la temperatura.', esCorrecta: false },
            { id: 'd', texto: 'Evitar el riego.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 14,
          texto: 'Un registro de cosecha incluye:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tipo de suelo.', esCorrecta: false },
            { id: 'b', texto: 'Tipo de herramienta.', esCorrecta: false },
            { id: 'c', texto: 'Color del recipiente.', esCorrecta: false },
            { id: 'd', texto: 'Cantidad producida.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 15,
          texto: 'Las labores culturales tienen como objetivo:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir el espacio.', esCorrecta: false },
            { id: 'b', texto: 'Sustituir el suelo.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Mejorar el desarrollo del cultivo.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Eliminar el riego.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 16,
          texto: 'El deshierbe consiste en:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Regar el cultivo.', esCorrecta: false },
            { id: 'b', texto: 'Aplicar fertilizantes.', esCorrecta: false },
            { id: 'c', texto: 'Cosechar.', esCorrecta: false },
            { id: 'd', texto: 'Eliminar malezas.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 17,
          texto: 'El seguimiento del proceso productivo permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evitar el trabajo.', esCorrecta: false },
            { id: 'b', texto: 'Reducir cultivos.', esCorrecta: false },
            { id: 'c', texto: 'Eliminar registros.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Detectar problemas a tiempo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 18,
          texto: 'Un indicador de producción es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cantidad cosechada.', esCorrecta: true },
            { id: 'b', texto: 'Color del suelo.', esCorrecta: false },
            { id: 'c', texto: 'Tipo de herramienta.', esCorrecta: false },
            { id: 'd', texto: 'Tamaño del contenedor.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 19,
          texto: 'La toma de decisiones en el cultivo se basa en:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Suposiciones.', esCorrecta: false },
            { id: 'b', texto: 'Costumbres.', esCorrecta: false },
            { id: 'c', texto: 'Registros y análisis.', esCorrecta: true },
            { id: 'd', texto: 'Opiniones externas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
        {
          id: 20,
          texto: 'La evaluación del sistema productivo permite:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evitar la siembra.', esCorrecta: false },
            { id: 'b', texto: 'Repetir errores.', esCorrecta: false },
            { id: 'c', texto: 'Identificar mejoras.', esCorrecta: true },
            { id: 'd', texto: 'Eliminar registros.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el mantenimiento, control y evaluación de cultivos en agricultura urbana.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
