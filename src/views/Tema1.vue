<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mantenimiento del cultivo en agricultura urbana 
      
    .bg1.mb-0
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/2.svg', alt='')
            p.mb-4 El mantenimiento del cultivo en agricultura urbana comprende el conjunto de prácticas técnicas orientadas a garantizar el crecimiento, desarrollo y productividad de las plantas en espacios reducidos. Estas labores incluyen el manejo adecuado del riego, la nutrición, el control de condiciones ambientales y la prevención de plagas y enfermedades.
            p.mb-0 En sistemas urbanos, el mantenimiento es aún más importante debido a las limitaciones de espacio, el uso de contenedores y la dependencia de intervenciones humanas para regular las condiciones del cultivo. Un manejo adecuado permite optimizar recursos, mejorar la calidad de la producción y asegurar la sostenibilidad del sistema.

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Riego
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4
        img.d-none.d-lg-block(src='@/assets/curso/tema1/3.png', alt='')
      .col-lg-8
        .bg2.p-lg-5.p-4.h-100
          img.mb-4.img-t.d-none.d-lg-block.mx-lg-4.my-lg-4(src='@/assets/curso/tema1/4.svg', alt='')
          p.mb-0.mx-lg-4 El riego es el proceso mediante el cual se suministra agua a las plantas de manera controlada, con el fin de satisfacer sus necesidades hídricas y garantizar su desarrollo adecuado. En la agricultura urbana, el riego es una de las prácticas más críticas, ya que los cultivos en contenedores dependen totalmente del suministro artificial de agua.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia del riego en agricultura urbana

    p.mb-4 El agua es un elemento esencial para la vida de las plantas, ya que interviene en múltiples procesos fisiológicos.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
          h4.mb-4.text-center Transporte de nutrientes
          p.mb-0 El agua disuelve los nutrientes del sustrato y los transporta desde las raíces hasta todas las células vegetales, permitiendo la absorción de elementos esenciales como nitrógeno, fósforo y potasio.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/6.svg' alt='AvatarTop')
          h4.mb-4.text-center  Fotosíntesis
          p.mb-0 El agua es uno de los reactivos fundamentales en la fotosíntesis, participando activamente en la conversión de luz solar en energía química que la planta utiliza para crecer y producir biomasa.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/7.svg' alt='AvatarTop')
          h4.mb-4.text-center Regulación de temperatura
          p.mb-0 A través del proceso de transpiración, la planta libera agua en forma de vapor, lo que reduce la temperatura de los tejidos evitando estrés térmico en días calurosos.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/8.svg' alt='AvatarTop')
          h4.mb-4.text-center Turgencia celular
          p.mb-0 El agua mantiene la presión dentro de las células, proporcionando rigidez y firmeza a los tallos y hojas. Sin turgencia, las plantas se marchitan y colapsan.

    .cajon.color-acento-botones.p-4.mb-5
      p.mb-0 La importancia del riego en la producción es evidente. El agua garantiza el crecimiento adecuado del cultivo, facilita la expansión celular, favorece la absorción de nutrientes del sustrato, ya que estos viajan disueltos en ella, evita el estrés hídrico, que debilita las plantas, y mejora la productividad general del sistema. El mal manejo del riego genera problemas serios; el exceso de agua causa pudrición de raíces y aparición de hongos patógenos, mientras que el déficit de agua produce marchitez visible y bajo crecimiento de las plantas.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Humedad del suelo o sustrato

    p.mb-5 La humedad del sustrato se refiere a la cantidad de agua retenida en el medio de cultivo disponible para las plantas. Es fundamental distinguir entre tres tipos de humedad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4(titulo="Humedad óptima")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/9.png', alt='')
              .col-lg-7.order-lg-1.order-md-1.order-1.mb-lg-0.mb-4
                p.mb-4 Nivel ideal para el desarrollo del cultivo, donde hay agua disponible, pero también espacio para aire. Las raíces pueden absorber agua sin sufrir por falta de oxígeno.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Indicadores:] sustrato húmedo al tacto, pero no encharcado.
          .p-lg-5.p-4(titulo="Exceso de humedad")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/10.png', alt='')
              .col-lg-7.order-lg-1.order-md-1.order-1.mb-lg-0.mb-4
                p.mb-4 Genera saturación limitando el oxígeno necesario para las raíces. Favorece proliferación de hongos patógenos y pudrición radicular.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-boltt
                    p.mb-0 #[b Síntomas:] sustrato permanentemente empapado, olor a tierra mojada, hojas amarillas.
          .p-lg-5.p-4(titulo="Déficit de humedad")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.order-lg-1.order-md-2.order-2
                img(src='@/assets/curso/tema1/11.png', alt='')
              .col-lg-7.order-lg-1.order-md-1.order-1.mb-lg-0.mb-4
                p.mb-4 Indica falta de agua disponible. La planta no puede absorber los nutrientes necesarios y sufre estrés hídrico.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-boltt
                    p.mb-0 #[b Síntomas:] sustrato seco y duro, hojas marchitas, plantas débiles.

    .cajon.color-secundario.p-4.mb-5
      p.mb-4 Varios factores influyen en la humedad del sustrato. El tipo de sustrato determina su capacidad de retención de agua, pues los sustratos livianos retienen menos, mientras que los sustratos pesados retienen más. El tamaño del contenedor afecta la velocidad de secado, ya que los contenedores pequeños se secan más rápido que los grandes. Las condiciones climáticas impactan la evaporación, dado que las temperaturas altas aceleran la pérdida de humedad. 
      p.mb-0 La frecuencia de riego es un factor que puede controlarse directamente durante el manejo del cultivo. Para verificar la humedad del sustrato existen diversos métodos prácticos. La observación del sustrato permite detectar cambios visuales en color y textura. El método manual o de tacto consiste en insertar el dedo aproximadamente dos centímetros en el sustrato para evaluar la presencia de agua. Por otro lado, el uso de medidores de humedad proporciona valores numéricos precisos, útiles para el registro y control técnico.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Factores técnicos del riego

    p.mb-4 El riego debe planificarse teniendo en cuenta diversos factores que influyen en la cantidad y la frecuencia del agua aplicada.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Tipo de cultivo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Cada especie tiene requerimientos hídricos diferentes. Las lechugas requieren humedad constante para mantener sus hojas turgentes y crujientes. Los suculentos toleran períodos secos prolongados porque almacenan agua en sus tejidos. Las frutas como el tomate requieren un riego moderado durante el crecimiento y un riego controlado durante la producción para concentrar sabores.
          .tarjeta.color-a.p-4(titulo="Etapa de desarrollo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Durante la germinación se requiere alta humedad para facilitar la emergencia de la plántula y evitar resecamiento. En el crecimiento se aplica riego moderado balanceando humedad con aireación para favorecer desarrollo radicular. Durante la producción se mantiene riego controlado según demanda específica del cultivo, ajustando según la producción de frutos.
          .tarjeta.color-a.p-4(titulo="Condiciones climáticas")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Las altas temperaturas aceleran la evaporación, requiriendo mayor frecuencia de riego, a veces diaria en climas muy cálidos. La alta humedad relativa reduce la necesidad de riego, porque la evaporación es más lenta. Los períodos de lluvia requieren suspender o reducir significativamente el riego para evitar encharcamiento.
          .tarjeta.color-a.p-4(titulo="Tipo de sustrato y contenedor")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Los sustratos livianos, como la turba o la fibra de coco, permiten menor retención de agua, requiriendo riego frecuente (a veces diario). Los sustratos pesados, como la tierra arcillosa, retienen más agua, necesitando menor frecuencia de riego. Los contenedores pequeños se secan más rápido que los contenedores grandes con el mismo cultivo, requiriendo mayor frecuencia de riego.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Sistemas de riego

    p.mb-4 Los sistemas de riego son los métodos utilizados para suministrar agua a los cultivos. Existen tres opciones principales en agricultura urbana:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Sistemas de riego utilizados en agricultura urbana con sus características técnicas
        .tabla-a.tab1 
          table
            thead
              tr
                th Sistema de riego
                th Descripción
                th Ventajas
                th Desventajas
            tbody
              tr
                td Riego manual
                td Se realiza con regaderas o recipientes directamente.
                td Bajo costo, fácil aplicación, control preciso.
                td Menor precisión en dosis, mayor esfuerzo físico, inconsistencia.
              tr
                td Riego por goteo
                td Sistema que suministra agua directamente a la raíz mediante tuberías.
                td Alta eficiencia, ahorro significativo de agua, menor aparición de enfermedades.
                td Inversión inicial más alta, requiere mantenimiento regular.
              tr
                td Riego por aspersión
                td Simula la lluvia mediante dispersión de agua en forma de gotas.
                td Cobertura uniforme, simula lluvia natural.
                td Mayor consumo de agua, puede favorecer enfermedades por hongos y generar pérdidas por evaporación.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Buenas prácticas en el manejo del riego

    p.mb-4 La implementación de buenas prácticas permite optimizar el uso del agua y mejorar la productividad del cultivo.

    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
      .row.justify-content-center.align-items-center(titulo="Recomendaciones técnicas")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Regar en horas de baja radiación (mañana temprano o al atardecer) para reducir la pérdida por evaporación y permitir una mejor absorción. Evitar el encharcamiento, ya que limita el oxígeno en las raíces. Verificar la humedad antes de regar para evitar excesos. Aplicar la cantidad adecuada de agua según el cultivo y sustrato específico.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/12.png')
      .row.justify-content-center.align-items-center(titulo="Manejo eficiente")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Ajustar el riego según cambios climáticos: reducir en épocas de lluvia, aumentar en sequías. Utilizar sistemas eficientes, como el goteo, que minimizan pérdidas de agua. Evitar el desperdicio, monitoreando constantemente el estado del sustrato y de las plantas.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/13.png')
      .row.justify-content-center.align-items-center(titulo="Prevención de enfermedades fúngicas")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 No mojar en exceso las hojas que son susceptibles a hongos. Mantener buen drenaje en contenedores para evitar encharcamiento. Evitar acumulación de agua en superficies donde pueden proliferar patógenos. Garantizar buena circulación de aire alrededor de las plantas.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/14.png')


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Manejo normativo (seguridad, ambiental, fitosanitaria) 
    
    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/15.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.mx-lg-4
        p.mb-0 Las normas de seguridad industrial y salud en el trabajo, comprenden el conjunto de principios, lineamientos y procedimientos orientados a prevenir accidentes, enfermedades laborales y riesgos asociados a las actividades productivas. En la agricultura urbana, estas normas adquieren gran relevancia debido al uso de herramientas, manipulación de insumos y condiciones particulares de trabajo en espacios reducidos.
        br
        br
        p.mb-0 La implementación de prácticas seguras no solo protege la integridad física del trabajador, sino que también mejora la eficiencia de las labores agrícolas, promueve ambientes de trabajo adecuados y garantiza el cumplimiento de la normativa vigente.
    
    .cajon.color-secundario.p-4.mb-5
      h4.mb-4 Importancia en actividades agrícolas
      p.mb-0 La seguridad y salud en el trabajo es fundamental en el sector agrícola, ya que las actividades implican diversos riesgos físicos, químicos y ergonómicos.

    .cajon.color-acento-botones.p-4.mb-5
      h4.mb-4 Importancia técnica
      p.mb-0 La seguridad en el trabajo es esencial para garantizar el desempeño eficiente y responsable de todas las labores agrícolas en espacios urbanos.
  
    .row.fondo7.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Proteger la salud e integridad física del trabajador
                    p.mb-0 Evita lesiones inmediatas y enfermedades ocupacionales que puedan afectar la vida laboral y personal.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema1/16.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Reducir la ocurrencia de accidentes laborales
                    p.mb-0 Implementar medidas preventivas disminuye significativamente la probabilidad de incidentes.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema1/17.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Prevenir enfermedades ocupacionales
                    p.mb-0 La exposición controlada a riesgos reduce enfermedades crónicas asociadas al trabajo agrícola.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema1/18.png")

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Aplicación en agricultura urbana

    p.mb-4 En espacios urbanos, los riesgos pueden aumentar debido a características específicas del entorno. Es necesario aplicar medidas de seguridad adaptadas al contexto particular de la producción en las ciudades.

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg4.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Áreas reducidas
          p.mb-0 Limitan el movimiento y la seguridad. Requieren organización estricta del espacio para evitar obstáculos y caídas.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg4.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Presencia de objetos y obstáculos
          p.mb-0 Incrementa el riesgo de caídas, golpes y lesiones. Especialmente crítico en balcones o terrazas compartidas.
      .col-lg-4.col-md-6
        .bg4.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Manejo de herramientas en espacios compartidos
          p.mb-0 Puede afectar a otras personas. Requiere delimitación clara del área de trabajo y señalización de seguridad.
    

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Normas básicas de seguridad
    
    p.mb-4 Las normas básicas de seguridad son reglas generales que deben cumplirse durante el desarrollo de actividades agrícolas. Su aplicación es obligatoria y no admite excepciones.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/19.svg' alt='AvatarTop')
          h4.mb-4.text-center Normas generales
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Utilizar herramientas adecuadas y en buen estado: cada herramienta debe ser la correcta para la tarea.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Mantener el área de trabajo limpia y ordenada: evita tropiezos, caídas y obstáculos.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 No dejar herramientas en el suelo: especialmente crítico en agricultura urbana, donde otras personas pueden transitar.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Almacenar correctamente los insumos: en contenedores seguros para evitar derrames y contaminación.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/20.svg' alt='AvatarTop')
          h4.mb-4.text-center Normas de comportamiento
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 No realizar actividades bajo fatiga o distracción: el cansancio reduce concentración.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Seguir instrucciones técnicas establecidas: cada procedimiento tiene una razón de ser.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Evitar el uso de herramientas sin capacitación: la falta de conocimiento aumenta riesgos.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/21.svg' alt='AvatarTop')
          h4.mb-4.text-center Normas en espacios urbanos
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Delimitar claramente el área de trabajo: para evitar intrusiones de otras personas.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Evitar obstrucciones en pasillos, balcones o terrazas: que interfieran con la circulación.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Garantizar estabilidad de materas y estructuras: mediante soportes seguros para prevenir volcamientos.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 Prevenir caídas o tropiezos: manteniendo el área ordenada y bien señalizada.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Elementos de protección personal (EPP)
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4
        img.d-none.d-lg-block(src='@/assets/curso/tema1/22.png', alt='')
      .col-lg-8
        .bg21.p-4
          img.mb-4.img-t.d-none.d-lg-block.mx-lg-4.my-lg-4(src='@/assets/curso/tema1/23.svg', alt='')
          p.mb-0.mx-lg-4 Los elementos de protección personal (EPP) son dispositivos diseñados para proteger al trabajador de riesgos que puedan afectar su salud o integridad física.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Elementos de protección personal y sus funciones en agricultura urbana
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-9
        .tabla-a.tab2
          table
            thead
              tr
                th Elemento
                th Función
                th Casos de uso
            tbody
              tr
                td Guantes
                td Protegen las manos de cortes, químicos y suciedad.
                td Manipulación de plantas e insumos.
              tr
                td Botas cerradas
                td Previenen resbalones y lesiones en pies.
                td Trabajo en áreas húmedas.
              tr
                td Mascarilla
                td Protege de polvo y vapores químicos.
                td Aplicación de agroquímicos.
              tr
                td Gafas de seguridad
                td Protegen los ojos de partículas y salpicaduras.
                td Uso de químicos y herramientas.
              tr
                td Ropa adecuada
                td Evita el contacto directo con sustancias irritantes.
                td Manipulación general de insumos.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema1/24.png', alt='')

    .cajon.color-acento-botones.p-4.mb-5
      p.mb-0 La reducción de riesgos de accidentes es el principal beneficio de los EPP, ya que actúan como una barrera protectora. Además, protegen al trabajador contra agentes químicos y biológicos, lo cual es especialmente crítico durante la manipulación de plaguicidas. Por último, contribuyen a mejorar las condiciones de trabajo al generar confianza y motivación en el trabajador.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Buenas prácticas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul.lista-ol--separador.mb-0
          li.d-flex.mb-2
            i.fas.fa-check
            h5.mb-0 Usar EPP según la actividad específica
              p.mb-0 No todos los EPP se utilizan para todas las tareas. Es necesario evaluar los riesgos y seleccionar los EPP adecuados.
          li.d-flex.mb-2
            i.fas.fa-check
            h5.mb-0 Mantener limpios y en buen estado
              p.mb-0 Un EPP dañado pierde su función protectora; por lo tanto, debe revisarse de manera regular.
          li.d-flex.mb-2
            i.fas.fa-check
            h5.mb-0 No compartir elementos personales
              p.mb-0 Cada persona debe tener su propio EPP.
          li.d-flex.mb-0
            i.fas.fa-check
            h5.mb-0 Reemplazar cuando estén deteriorados
              p.mb-0 Un guante con un agujero no ofrece una protección adecuada.
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema1/25.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Identificación de riesgos

    p.mb-4 La identificación de riesgos es el proceso mediante el cual se reconocen las situaciones que pueden generar daño o afectar la salud del trabajador. Este paso es fundamental y debe realizarse antes de implementar medidas de control.

    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center(titulo="Riesgos físicos")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 Son aquellos derivados de condiciones del ambiente, movimientos inadecuados o caídas.
              p.mb-4 #[b Incluyen:] cortes con herramientas, caídas desde alturas, golpes, exposición al sol, quemaduras.
              p.mb-0 #[b Consecuencia:] lesiones graves, incapacidad temporal o permanente.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/26.png')
      .row.justify-content-center.align-items-center(titulo="Riesgos químicos")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 Están asociados al uso y manipulación de sustancias químicas utilizadas en la agricultura.
              p.mb-4 #[b Incluyen:] exposición a fertilizantes, vapores de plaguicidas, contacto directo con químicos.
              p.mb-0 #[b Consecuencia:] intoxicación, quemaduras químicas, problemas respiratorios.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/27.png')
      .row.justify-content-center.align-items-center(titulo="Riesgos biológicos")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 Provienen del contacto con microorganismos, plagas o materiales contaminados.
              p.mb-4 #[b Incluyen:] hongos patógenos, bacterias, plagas, alergias a esporas.
              p.mb-0 #[b Consecuencia:] infecciones, micosis, reacciones alérgicas graves.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/28.png')
      .row.justify-content-center.align-items-center(titulo="Riesgos ergonómicos")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 Resultan de posturas inadecuadas, movimientos repetitivos o esfuerzos excesivos.
              p.mb-4 #[b Incluyen:] posturas inadecuadas, movimientos repetitivos, cargas de peso excesivo.
              p.mb-0 #[b Consecuencia:] lesiones musculoesqueléticas crónicas, tendinitis, dolor persistente de espalda.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/29.png')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Proceso de identificación de riesgos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        LineaTiempoE.color-primario
          .row.justify-content-center.align-items-center(titulo="Paso 1" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/79.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Observación del área de trabajo
              p.mb-0 Recorrer el espacio identificando condiciones inseguras.
          .row.justify-content-center.align-items-center(titulo="Paso 2" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/80.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Reconocimiento de actividades
              p.mb-0 Listar todas las labores que se realizan.
          .row.justify-content-center.align-items-center(titulo="Paso 3" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/81.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Identificación de peligros
              p.mb-0 Asociar cada actividad con sus riesgos potenciales.
          .row.justify-content-center.align-items-center(titulo="Paso 4" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/82.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Evaluación e implementación
              p.mb-0 Priorizar riesgos e implementar medidas de control.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Prevención de accidentes en agricultura urbana

    p.mb-5 La prevención de accidentes consiste en aplicar medidas que reduzcan o eliminen los riesgos identificados. Es un enfoque proactivo que evita que los problemas ocurran antes de que causen lesiones.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Medidas preventivas principales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul.lista-ol--separador.mb-0
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Uso obligatorio de EPP:] según la actividad específica que se desarrolle.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Capacitación en manejo seguro:] antes de manipular herramientas o insumos.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Organización del espacio de trabajo:] mantener pasillos y áreas de circulación despejados.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Señalización clara de áreas de riesgo:] usar cintas, letreros o símbolos de advertencia.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Supervisión regular:] verificar que se cumplan los procedimientos de seguridad.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/30.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Prácticas seguras

    .cajon.color-acento-botones.p-4.p-lg-5.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/tema1/31.png', alt='')
        .col-lg-7
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-check.t1
              h3.mb-0 Mantener herramientas en buen estado
                p.mb-0 Revisarlas regularmente para verificar que estén libres de óxido, con mangos sin grietas y debidamente afiladas, según corresponda.
            li.d-flex.mb-2
              i.fas.fa-check.t1
              h3.mb-0 Evitar improvisaciones
                p.mb-0 Usar cada herramienta según su diseño y función original.
            li.d-flex.mb-2
              i.fas.fa-check.t1
              h3.mb-0 No sobrecargar contenedores
                p.mb-0 Respetar el límite de peso indicado en cada contenedor.
            li.d-flex.mb-0
              i.fas.fa-check.t1
              h3.mb-0 Trabajar con buena iluminación
                p.mb-0 No realizar tareas que requieran precisión en condiciones de penumbra.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Consideraciones específicas en espacios urbanos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/32.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Asegurar estabilidad de materas y estructuras
            p.mb-0 Usar soportes o anclajes para evitar volcamientos.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/33.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Evitar acumulación de agua
            p.mb-0 El agua estancada causa resbalones peligrosos.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/34.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Mantener áreas despejadas
            p.mb-0 Libres de obstáculos para permitir circulación segura.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/35.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Supervisar presencia de niños o mascotas
            p.mb-0 Delimite y señalice para protegerlos.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Cultura de prevención

    .cajon.color-secundario.p-4.p-lg-5.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-11
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-check
                  p.mb-0 #[b Fomentar hábitos seguros como rutina diaria:] la seguridad es parte de cómo se trabaja.
                li.d-flex.mb-4
                  i.fas.fa-check
                  p.mb-0 #[b Promover responsabilidad individual:] cada trabajador es responsable de su propia seguridad.
                li.d-flex.mb-4
                  i.fas.fa-check
                  p.mb-0 #[b Reportar inmediatamente condiciones inseguras:] para implementar medidas correctivas.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 #[b Participar activamente en programas de seguridad:] asistir a capacitaciones.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/tema1/36.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="¿Por qué la seguridad es importante en agricultura urbana?")
            .col-lg-11
              p.mb-0 En espacios urbanos, los riesgos aumentan por limitaciones de espacio, presencia de obstáculos, entorno compartido con otras personas. La seguridad protege al trabajador, al entorno y a la comunidad cercana.
          .row.align-items-center(titulo="¿Cuáles son mis responsabilidades?")
            .col-lg-11
              p.mb-0 Mantener el área limpia, usar EPP adecuado, seguir instrucciones técnicas, reportar riesgos, capacitarse continuamente, supervisar a otros.
          .row.align-items-center(titulo="¿Qué hago si identifico un riesgo?")
            .col-lg-11
              p.mb-0 Se debe detener la actividad, evaluar el peligro identificado, implementar las medidas de control correspondientes, verificar su efectividad y reportar el incidente.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/37.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Normativa ambiental

    p.mb-4 La normativa ambiental comprende el conjunto de leyes, reglamentos y lineamientos que regulan las actividades humanas con el fin de proteger el medio ambiente, conservar los recursos naturales y prevenir impactos negativos. En la agricultura urbana, su aplicación es fundamental para garantizar prácticas sostenibles, responsables y seguras.

    p.mb-5 El cumplimiento de la normativa ambiental permite desarrollar sistemas productivos que respeten el entorno, reduzcan la contaminación y promuevan el uso eficiente de los recursos como el agua, el suelo y la biodiversidad.
    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia en la producción agrícola
    
    p.mb-4 La normativa ambiental es clave para orientar las actividades agrícolas hacia la sostenibilidad.

    .row.justify-content-center.mb-lg-5.mb-0(data-aos="fade-left")
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          .titulo.mb-5(data-aos="fade-left").ali
            img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
            h3.mb-0 Importancia técnica
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Protege los recursos naturales (suelo, agua, aire).
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Previene la contaminación ambiental.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Promueve el uso responsable de insumos.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Garantiza la seguridad alimentaria.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Favorece la sostenibilidad del sistema productivo.
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          .titulo.mb-5(data-aos="fade-left").ali
            img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
            h3.mb-0 En agricultura urbana
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Evita impactos negativos en espacios habitados.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Regula el manejo de residuos.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Promueve prácticas limpias.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 • Protege la salud de las personas.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Características de la normativa ambiental

    p.mb-4 La normativa ambiental posee características que orientan su aplicación en el sector agrícola.
    
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/38.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Carácter preventivo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Busca evitar daños al medio ambiente antes de que ocurran.
          .tarjeta.color-a.p-4(titulo="Carácter obligatorio")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Su cumplimiento es de carácter legal y debe ser respetado por todos los actores.
          .tarjeta.color-a.p-4(titulo="Enfoque sostenible")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Promueve el equilibrio entre producción y conservación de recursos.
          .tarjeta.color-a.p-4(titulo="Integralidad")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Considera aspectos ambientales, sociales y económicos.
          .tarjeta.color-a.p-4(titulo="Adaptabilidad")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Se ajusta a diferentes contextos, incluyendo la agricultura urbana.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Clasificación de residuos

    p.mb-4 Los residuos generados en actividades agrícolas deben clasificarse para facilitar su manejo adecuado.
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Residuos orgánicos
          p.mb-0 Son de origen natural y biodegradables, como restos de plantas, hojas y residuos de cosecha. Se utilizan para compostaje y producción de abonos orgánicos.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Residuos inorgánicos
          p.mb-0 No se descomponen fácilmente, como plásticos, envases y materiales sintéticos.
      .col-lg-4.col-md-6
        .bg7.p-4.h-100
          h4.mb-4.text-center.my-lg-3 Residuos peligrosos
          p.mb-0 Pueden afectar la salud y el ambiente, como los envases de agroquímicos, las sustancias químicas y los productos contaminantes.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Disposición adecuada de residuos

    p.mb-4 La correcta disposición de residuos es esencial para evitar la contaminación y proteger el entorno.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/39.svg' alt='AvatarTop')
          h4.mb-4.text-center Manejo de residuos orgánicos
          p.mb-0 • Compostaje.
          p.mb-0 • Reutilización en el cultivo.
          p.mb-0 • Aprovechamiento como abono.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/40.svg' alt='AvatarTop')
          h4.mb-4.text-center Manejo de residuos inorgánicos
          p.mb-0 • Separación en la fuente.
          p.mb-0 • Reciclaje.
          p.mb-0 • Reutilización.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/41.svg' alt='AvatarTop')
          h4.mb-4.text-center Manejo de residuos peligrosos
          p.mb-0 • Almacenamiento seguro.
          p.mb-0 • No reutilizar envases contaminados.
          p.mb-0 • Entrega a puntos autorizados.

    .cajon.color-secundario.p-4.p-lg-5.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-11
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-check
                  p.mb-0 #[b Clasificar los residuos:] separar según su tipo (orgánico, inorgánico, peligroso).
                li.d-flex.mb-4
                  i.fas.fa-check
                  p.mb-0 #[b No mezclar residuos peligrosos con orgánicos:] evita contaminación cruzada.
                li.d-flex.mb-4
                  i.fas.fa-check
                  p.mb-0 #[b Mantener áreas limpias:] previene acumulación de residuos.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 #[b Reducir generación de residuos:] aplicar principio de reducción en la fuente.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/tema1/42.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Regulación de la siembra de cultivos

    p.mb-4 La normativa ambiental también regula las prácticas de siembra para evitar impactos negativos.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Regulación de la siembra: aspectos normados, aplicación urbana y objetivos
        .tabla-a.tab3
          table
            thead
              tr
                th Aspectos regulados
                th En agricultura urbana
                th Objetivo de la regulación
            tbody
              tr
                td
                  p.mb-0 • Uso adecuado del suelo o sustrato.
                  p.mb-0 • Control del uso de agroinsumos.
                  p.mb-0 • Protección de fuentes hídricas.
                td
                  p.mb-0 • Evitar el uso excesivo de químicos.
                  p.mb-0 • Promover cultivos sostenibles.
                  p.mb-0 • Respetar normas locales.
                td
                  p.mb-0 • Proteger el ambiente.
                  p.mb-0 • Garantizar producción segura.
                  p.mb-0 • Promover sostenibilidad.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/43.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Normativa ambiental en el sector agrícola

    p.mb-4 El sector agrícola está regulado por diversas normas que buscan el equilibrio entre producción y conservación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-4
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Enfoques principales")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-5
                  ul.lista-ul.mb-0
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Uso eficiente del agua.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Conservación del suelo.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Manejo adecuado de residuos.
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Control del uso de agroquímicos.
                .col-lg-7.d-none.d-lg-block
                  img(src='@/assets/curso/tema1/45.png', alt='')
          .row.align-items-center(titulo="Aplicación en agricultura urbana")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-5
                  ul.lista-ul.mb-0
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Uso de prácticas agroecológicas.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Reducción de contaminantes.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Producción limpia.
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Educación ambiental.
                .col-lg-7.d-none.d-lg-block
                  img(src='@/assets/curso/tema1/46.png', alt='')
          .row.align-items-center(titulo="Beneficios del cumplimiento normativo")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-5
                  ul.lista-ul.mb-0
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Mejora la calidad del producto.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Reduce impactos ambientales.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Protege la salud humana.
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Favorece la sostenibilidad.
                .col-lg-7.d-none.d-lg-block
                  img(src='@/assets/curso/tema1/47.png', alt='')
          .row.align-items-center(titulo="Consecuencias del incumplimiento")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-5
                  ul.lista-ul.mb-0
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Contaminación del suelo y agua.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Afectación a la salud.
                    li.d-flex.mb-1
                      i.fas.fa-check.t11
                      p.mb-0 Sanciones legales.
                    li.d-flex.mb-0
                      i.fas.fa-check.t11
                      p.mb-0 Pérdida de productividad.
                .col-lg-7.d-none.d-lg-block
                  img(src='@/assets/curso/tema1/48.png', alt='')
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema1/44.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Normativa ambiental aplicable al sector agrícola en Colombia
        .tabla-a.tab4
          table
            thead
              tr
                th Norma
                th Tipo
                th Entidad o fuente
                th ¿Qué regula?
                th Aplicación en agricultura urbana
            tbody
              tr
                td Ley 99 de 1993
                td Ley
                td Estado colombiano
                td Protección ambiental y creación del Sistema Nacional Ambiental (SINA)
                td Uso sostenible de recursos y cuidado del entorno
              tr
                td Decreto 1076 de 2015
                td Decreto
                td Ministerio de Ambiente y Desarrollo Sostenible
                td Normativa ambiental general (agua, aire, suelo)
                td Base legal para prácticas agrícolas sostenibles
              tr
                td Decreto 3930 de 2010
                td Decreto
                td Ministerio de Ambiente y Desarrollo Sostenible
                td Uso del agua y control de vertimientos
                td Manejo adecuado del riego y aguas residuales
              tr
                td Ley 373 de 1997
                td Ley
                td Estado colombiano
                td Uso eficiente y ahorro del agua
                td Optimización del riego en cultivos urbanos
              tr
                td Decreto 4741 de 2005
                td Decreto
                td Ministerio de Ambiente y Desarrollo Sostenible
                td Manejo de residuos peligrosos
                td Disposición de envases de agroquímicos
              tr
                td Resolución 2184 de 2019
                td Resolución
                td Ministerio de Ambiente y Desarrollo Sostenible
                td Clasificación de residuos por colores
                td Separación adecuada de residuos en huertas
              tr
                td Instituto Colombiano Agropecuario (ICA)
                td Entidad reguladora
                td ICA
                td Control de insumos agrícolas y sanidad vegetal
                td Uso adecuado de fertilizantes y plaguicidas
              tr
                td Resolución 30021 de 2017
                td Resolución
                td ICA
                td Implementación de Buenas Prácticas Agrícolas (BPA)
                td Producción limpia y segura
              tr
                td Decreto 948 de 1995
                td Decreto
                td Ministerio de Ambiente y Desarrollo Sostenible
                td Control de emisiones contaminantes
                td Evitar quemas y reducir contaminación
              tr
                td Normativa local (municipal)
                td Reglamentos
                td Alcaldías/autoridades locales
                td Uso del suelo y gestión ambiental local
                td Regulación de agricultura urbana en cada territorio
          
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Normativa fitosanitaria

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 La normativa fitosanitaria reúne las disposiciones orientadas a proteger la sanidad vegetal, prevenir la propagación de plagas y enfermedades, y regular el uso adecuado de insumos agrícolas. En la agricultura urbana, su aplicación es importante para mantener cultivos sanos, seguros y sostenibles. En Colombia, esta regulación es liderada principalmente por el Instituto Colombiano Agropecuario (ICA).

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia en la sanidad vegetal
    
    .cajon.color-acento-botones.p-4.mb-5
      p.mb-0 La sanidad vegetal se refiere al buen estado de salud de las plantas y a su desarrollo sin afectaciones por plagas o enfermedades. Su importancia radica en que ayuda a prevenir la propagación de plagas, reducir pérdidas en la producción, mejorar la calidad de los cultivos, proteger la biodiversidad y favorecer alimentos más seguros para el consumo. En agricultura urbana, además, evita contagios entre cultivos cercanos, protege la salud de las personas y contribuye a reducir el uso excesivo de químicos.
    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Características de la normativa fitosanitaria

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/49.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.mx-lg-4
        p.mb-0 La normativa fitosanitaria se caracteriza por su #[b enfoque preventivo,] ya que busca evitar la aparición y propagación de plagas; por su #[b carácter obligatorio,] debido a que debe cumplirse conforme a lo establecido por las autoridades competentes; por su #[b enfoque técnico,] sustentado en criterios científicos y agronómicos; por el #[b control sanitario,] mediante acciones de vigilancia y control; y por la #[b regulación de insumos,] que orienta el uso adecuado de productos agrícolas.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Legislación sobre uso de plaguicidas

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-12
        img(src='@/assets/curso/tema1/50.png', alt='')
    
    p.mb-4 El uso de plaguicidas está regulado para evitar riesgos a la salud humana y al medio ambiente. La clasificación internacional establece niveles de toxicidad que orientan el manejo seguro, almacenamiento, transporte y uso adecuado de estos productos, permitiendo identificar de manera clara el nivel de riesgo de cada plaguicida.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Clasificación de plaguicidas según #[em OMS y SGA]: categorías de toxicidad
        .tabla-a
          table
            thead
              tr
                th Categoría
                th Clasificación OMS
                th Palabra de advertencia del SGA
                th Nivel de riesgo
            tbody
              tr
                td 1A
                td Extremadamente peligroso (rojo)
                td Peligro (rojo)
                td Extremadamente peligroso
              tr
                td 1B
                td Altamente peligroso (rojo)
                td Peligro (rojo)
                td Altamente peligroso
              tr
                td 2
                td Moderadamente peligroso (amarillo)
                td Peligro (rojo) o Atención (amarillo)
                td Peligroso
              tr
                td 3
                td Ligeramente peligroso (azul)
                td Atención (amarillo)
                td Precaución
              tr
                td 4
                td Poco probable que presente peligro (verde)
                td Atención (amarillo)
                td Baja peligrosidad

    p.mb-5 #[b Nota:] el riesgo depende del manejo y la exposición. 

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Principales lineamientos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul.lista-ol--separador.mb-0
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Uso exclusivo de productos autorizados por el Instituto Colombiano Agropecuario (ICA):] solo plaguicidas registrados y certificados.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Respeto de dosis y frecuencias recomendadas:] aplicar según instrucciones de la etiqueta.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Prohibición de productos no registrados:] evitar uso de productos químicos sin autorización.
          li.d-flex.mb-0
            i.fas.fa-check
            p.mb-0 #[b Manejo seguro durante el almacenamiento y la aplicación:] guardar en lugares seguros y aplicar con precaución.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/51.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Buenas prácticas

    .cajon.color-acento-botones.p-4.p-lg-5.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/tema1/52.png', alt='')
        .col-lg-7
          ul.lista-ul.mb-0
            li.d-flex.mb-4
              i.fas.fa-check.t1
              p.mb-0 #[b Leer etiquetas antes de aplicar:] conocer composición, instrucciones y riesgos.
            li.d-flex.mb-4
              i.fas.fa-check.t1
              p.mb-0 #[b Usar elementos de protección personal (EPP):] guantes, gafas, mascarilla, ropa adecuada.
            li.d-flex.mb-4
              i.fas.fa-check.t1
              p.mb-0 #[b No mezclar productos sin recomendación técnica:] mezclas improvisadas aumentan riesgos.
            li.d-flex.mb-0
              i.fas.fa-check.t1
              p.mb-0 #[b Evitar aplicaciones en horas de alta radiación o viento:] aplicar en horas frescas (mañana o tarde) para mayor efectividad.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Riesgos del mal uso

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/53.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Contaminación del suelo y del agua
            p.mb-0 Afecta ecosistemas y fuentes hídricas.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/54.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Afectaciones a la salud humana
            p.mb-0 Intoxicación aguda o crónica.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/55.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Resistencia de plagas
            p.mb-0 El uso inadecuado puede generar plagas más resistentes.
          .tarjeta.tarjeta--slyder.b2.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-lg-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/56.svg' alt='AvatarTop')
            h4.text-center.mb-0.ps-2.pe-2.mb-4 Daño a organismos benéficos
            p.mb-0 Mata insectos polinizadores y depredadores naturales.

    .row.justify-content-center.align-items-center.mb-5
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Prevención de plagas y enfermedades

    .bg8.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/57.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/58.svg', alt='')
            p.mb-0(data-aos="fade-left") La prevención es la estrategia más eficiente para el control fitosanitario, ya que evita la aparición de problemas antes de que afecten los cultivos. Un enfoque preventivo reduce significativamente el uso de productos químicos, protege el ambiente y garantiza la salud de las plantas de manera sostenible.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Estrategias de prevención y control fitosanitario en agricultura urbana
        .tabla-a.tab3
          table
            thead
              tr
                th Estrategias preventivas
                th Control cultural
                th Control biológico
            tbody
              tr
                td
                  p.mb-0 • Selección de semillas sanas.
                  p.mb-0 • Uso de sustratos limpios.
                  p.mb-0 • Rotación de cultivos.
                  p.mb-0 • Asociación de cultivos.
                  p.mb-0 • Manejo adecuado del riego.
                td
                  p.mb-0 • Eliminación de residuos infectados.
                  p.mb-0 • Limpieza del área de cultivo.
                  p.mb-0 • Desinfección de herramientas.
                td
                  p.mb-0 • Uso de organismos benéficos.
                  p.mb-0 • Aplicación de bioinsumos.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/59.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Monitoreo constante

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg9.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/60.svg')
          h3.mb-4.text-center Observación periódica del cultivo
          p.mb-0 Revisar regularmente el estado de las plantas para detectar cambios.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg10.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/61.svg')
          h3.mb-4.text-center Identificación temprana de plagas
          p.mb-0 Reconocer signos de presencia de plagas antes de que causen daños.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg11.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/62.svg')
          h3.mb-4.text-center Toma de decisiones oportunas
          p.mb-0 Implementar medidas de control de inmediato si se detectan problemas.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Consecuencias del incumplimiento
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/63.svg' alt='AvatarTop')
          h4.mb-4.text-center Propagación de plagas
          p.mb-0 Sin control preventivo, las plagas se multiplican rápidamente y afectan múltiples cultivos.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/64.svg' alt='AvatarTop')
          h4.mb-4.text-center Pérdidas en la producción
          p.mb-0 Reducción significativa del rendimiento y de calidad de las cosechas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/65.svg' alt='AvatarTop')
          h4.mb-4.text-center Riesgos para la salud
          p.mb-0 Posible exposición a sustancias químicas en niveles elevados o consumo de alimentos contaminados.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg3.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/66.svg' alt='AvatarTop')
          h4.mb-4.text-center Sanciones legales
          p.mb-0 El incumplimiento de normativa fitosanitaria del ICA puede resultar en la imposición de multas o restricciones.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Recomendación final: enfoque integrado de prevención

    .cajon.color-secundario.p-4.p-lg-5.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-11
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check
                  h3.mb-3 Combina estrategias preventivas, controles culturales y biológicos
                p.mb-3.mx-4 El mejor control fitosanitario integra múltiples enfoques: seleccionar semillas sanas, mantener sustratos limpios, rotar cultivos, usar organismos benéficos, monitorear constantemente y actuar oportunamente ante cualquier signo de plaga.
                li.d-flex.mb-0
                  i.fas.fa-check
                  h3.mb-3 Reduce dependencia de químicos
                p.mb-3.mx-4 Una estrategia preventiva y biológica disminuye significativamente el uso de plaguicidas, protegiendo la salud humana y el ambiente.
                li.d-flex.mb-0
                  i.fas.fa-check
                  h3.mb-3 Garantiza sostenibilidad
                p.mb-3.mx-4 Esta aproximación asegura cultivos sanos a largo plazo sin comprometer los recursos naturales.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/tema1/67.png', alt='')


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Labores culturales y fertilización

    p.mb-5 Durante el ciclo del cultivo se desarrollan prácticas técnicas orientadas a mantener su crecimiento, sanidad, productividad y rendimiento. En la agricultura urbana, estas acciones permiten optimizar el uso de los recursos, conservar condiciones adecuadas de manejo y prevenir problemas que afecten el sistema productivo. 

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Labores culturales

    p.mb-5 Las labores culturales son prácticas agrícolas que se realizan para favorecer el desarrollo adecuado del cultivo, mantener condiciones óptimas de crecimiento y prevenir afectaciones fitosanitarias. En la agricultura urbana, son fundamentales debido a las limitaciones de espacio y a la necesidad de sostener sistemas productivos eficientes y sostenibles. Además, garantizan el adecuado manejo del cultivo desde su establecimiento hasta la cosecha, siendo esenciales para lograr plantas sanas y productivas. 

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia
    
    p.mb-4 Las labores culturales garantizan el adecuado manejo del cultivo desde su establecimiento hasta la cosecha, siendo esenciales para lograr plantas sanas y productivas.

    .row.justify-content-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/68.svg')
          h3.mb-4.text-center Importancia técnica
          p.mb-2 • Favorecen el crecimiento saludable de las plantas.
          p.mb-2 • Mejoran la calidad y cantidad de la producción.
          p.mb-2 • Previenen plagas y enfermedades.
          p.mb-2 • Optimizan el uso de agua y nutrientes.
          p.mb-0 • Mantienen el equilibrio del sistema productivo.
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/69.svg')
          h3.mb-4.text-center En agricultura urbana
          p.mb-2 • Permiten aprovechar mejor los espacios reducidos.
          p.mb-2 • Facilitan el manejo de cultivos en contenedores.
          p.mb-2 • Contribuyen a la producción limpia.
          p.mb-0 • Reducen el uso de agroquímicos.

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Tipos de labores culturales

    p.mb-4 Las labores culturales varían según el tipo de cultivo, sin embargo, existen prácticas comunes que se aplican en la mayoría de sistemas productivos urbanos.

    .row.fondo7.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Deshierbe (control de malezas)
                    p.mb-0 • Eliminación de plantas no deseadas.
                    p.mb-4 • Evita competencia por agua, luz y nutrientes.
                    h4.mb-4 Aporque
                    p.mb-0 • Acumulación de tierra alrededor de la planta.
                    p.mb-0 • Mejora la estabilidad y desarrollo radicular.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema1/70.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Raleo
                    p.mb-0 • Eliminación de plantas en exceso.
                    p.mb-4 • Permite mejor desarrollo de las plantas restantes.
                    h4.mb-4 Tutorado
                    p.mb-0 • Uso de soportes para plantas trepadoras.
                    p.mb-0 • Evita contacto con el suelo y mejora la aireación.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema1/71.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Poda
                    p.mb-0 • Eliminación de hojas o ramas innecesarias.
                    p.mb-4 • Favorece el crecimiento y la producción.
                    h4.mb-4 Fertilización
                    p.mb-0 • Aplicación de nutrientes al cultivo.
                    p.mb-0 • Mejora el desarrollo y rendimiento.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema1/72.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Control fitosanitario
                    p.mb-0 • Manejo de plagas y enfermedades.
                    p.mb-4 • Uso de métodos preventivos o correctivos.
                    h4.mb-4 Riego
                    p.mb-0 • Suministro de agua según necesidades del cultivo.
                  .col-lg-6.col-md-8.col-10
                    img(alt="" src="@/assets/curso/tema1/73.png")

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Función de las labores culturales

    p.mb-4 Cada labor cultural cumple funciones específicas dentro del sistema productivo. Una misma actividad puede tener múltiples beneficios simultáneamente.

    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center(titulo="Función productiva")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 • Incrementar el rendimiento del cultivo.
              p.mb-0 • Mejorar la calidad de los productos.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/74.png')
      .row.justify-content-center.align-items-center(titulo="Función preventiva")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 • Reducir riesgos de plagas y enfermedades.
              p.mb-0 • Mantener condiciones adecuadas del cultivo.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/75.png')
      .row.justify-content-center.align-items-center(titulo="Función de manejo")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 • Facilitar el control del cultivo.
              p.mb-0 • Organizar el espacio de producción.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/76.png')
      .row.justify-content-center.align-items-center(titulo="Función ambiental")
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-4
              p.mb-4 • Promover prácticas sostenibles.
              p.mb-4 • Reducir el impacto ambiental.
              p.mb-0 • Favorecer el equilibrio ecológico.
            .col-lg-6.col-md-8.col-10
              img(src='@/assets/curso/tema1/77.png')

    .row.justify-content-center.align-items-center.mb-4
      .col-auto.pe-0
        img.img-t.d-none.d-sm-block.mb-0(data-aos="zoom-in-left")(src='@/assets/curso/tema1/ic.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-end.mb-0
            h4.mb-0.ps-lg-3.ps-0.ps-md-3 Pertinencia según el cultivo

    p.mb-4 No todas las labores culturales se aplican de la misma manera. Su pertinencia depende del tipo de cultivo, la etapa de desarrollo y las condiciones del entorno específico.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/78.png', alt='')
      .col-lg-7
        TabsA.color-acento-botones.tem1.mb-0
          .tarjeta.color-a.p-4(titulo="Según el tipo de cultivo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h5.mb-0 Hortalizas (lechuga, espinaca)
                p.mb-4 Deshierbe, riego frecuente, fertilización.
                h5.mb-0 Cultivos trepadores (tomate, frijol)
                p.mb-4 Tutorado, poda, control fitosanitario.
                h5.mb-0 Raíces (zanahoria, rábano)
                p.mb-0 Raleo, control de suelo, riego moderado.
          .tarjeta.color-a.p-4(titulo="Según la etapa del cultivo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h5.mb-0 Germinación
                p.mb-4 Riego suave, protección.
                h5.mb-0 Crecimiento
                p.mb-4 Fertilización, deshierbe.
                h5.mb-0 Producción
                p.mb-4 Poda, control fitosanitario.
                h5.mb-0 Cosecha
                p.mb-0 Manejo adecuado del producto.
          .tarjeta.color-a.p-4(titulo="Según condiciones del entorno")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-2 • Espacio disponible.
                p.mb-2 • Tipo de sustrato.
                p.mb-2 • Clima o microclima.
                p.mb-0 • Disponibilidad de agua.


</template>

<script>
export default {
  name: 'Tema1',
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
