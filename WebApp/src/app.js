// Mostrar/ocultar pasatiempos
    function togglePasatiempos(id) {
      const lista = document.getElementById(id);
      if (lista.style.display === 'block') {
        lista.style.display = 'none';
      } else {
        lista.style.display = 'block';
      }
    }

    // Toggle formulario como pestaña inferior
    const toggleFormBtn = document.getElementById('toggle-form-btn');
    const formPanel = document.getElementById('form-panel');

    toggleFormBtn.addEventListener('click', () => {
      const isActive = formPanel.classList.toggle('active');
      toggleFormBtn.setAttribute('aria-expanded', isActive);
      formPanel.setAttribute('aria-hidden', !isActive);
      // Cambio texto botón opcional:
      // toggleFormBtn.textContent = isActive ? 'Cerrar contacto' : 'Contacto';
    });

    // Simulación de envío del formulario
    document.getElementById('form-contacto').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
      this.reset();
      // También puedes cerrar la pestaña al enviar:
      formPanel.classList.remove('active');
      toggleFormBtn.setAttribute('aria-expanded', false);
      formPanel.setAttribute('aria-hidden', true);
    });
