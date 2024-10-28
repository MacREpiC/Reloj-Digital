function actulizarReloj() {
      // Creamos un objeto de tipo Date para poder manipular las horas
      let ahora = new Date(); 
      /* 
        String () -> Para convertir el número devuelto de la funcion getHours() 
        getHours() -> Obtener la hora actual
        padStart(2, '0') -> Par 1: Longitus mínima que debe de tener la cadena
                            Par 2: En caso de que la longitud sea menor que dos se le añade un 0 delante  
      */
      let horas = String(ahora.getHours()).padStart(2, '0');
      let minutos = String(ahora.getMinutes()).padStart(2, '0');
      let segundos = String(ahora.getSeconds()).padStart(2, '0');

      // Actualizamos 
      document.getElementById("horas").textContent = horas;
      document.getElementById("minutos").textContent = minutos;
      document.getElementById("segundos").textContent = segundos;
    }

    // Actualizar el reloj cada segundo
    setInterval(actulizarReloj, 1000);