const Acerca = () => {
  return (
    <section>
      <h2>Acerca del proyecto</h2>

      <h3>¿De que trata esto?</h3>
      <p>Maquetación de WhatsApp Web desarrollada como trabajo final de la diplomatura UTN frontend.</p>

      <h3>Partes principales</h3>
      <p>La aplicación tiene un panel lateral con los contactos y un panel de chat donde se pueden seleccionar contactos y enviar mensajes. Tambien cuenta con una barra de busqueda la cual esta conectada con la lista de contactos</p>

      <h3>Tecnologías utilizadas</h3>
      <p>React, React Router, React Context, Vite, CSS, JavaScript.</p>

      <h3>Decisiones de desarrollo</h3>
      <p>utilice Context para manejar el estado global de la aplicación, incluyendo el usuario logueado y los mensajes.</p>

      <h3>Observaciones personales</h3>
      <p>Fue un proyecto mas que desafiante, me vi obligado a rever algunas clases y buscar mas informacion en internet en cuanto a algunos manejos de las herramientas, pero mas que conforme con el resultado y la utilidad de lo aprendido.</p>
    </section>
  )
}

export { Acerca }