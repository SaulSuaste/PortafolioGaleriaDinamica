const grid = new Muuri('.grid', {
    layout: {
        rounding: false //para poder modificar tamaños
      }
});

//se crea un evento para la ventana, al cargar la ventana se agrega a la seccion
//con ID "grid" el estilo para que aparezcan las imagenes
window.addEventListener('load', ()=>{
  //refresque los elementos ajustando los tamaños correctamente
  grid.refreshItems().layout(); 

  //se obtiene el elemento section por su id y se agrega una clase, para que
  //se le agregue un estilo
  document.getElementById("grid").classList.add("imagenes-cargadas");


  // Para la seleccion de categorias ********************************

  const enlaces = document.querySelectorAll("#categorias a")
  enlaces.forEach(elemento => {
    //console.log(elemento);

    //a cada elemento de las categorias se le agrega un evento
    elemento.addEventListener("click", evento => {
      evento.preventDefault(); //evita el comportamiento normal al cargar link o pagina

      //elimina la clase activo si algun enlace la tiene
      enlaces.forEach(enlace => enlace.classList.remove("activo"));
      //console.log(evento.target); //obtiene el elemento al cual se clickea
      evento.target.classList.add("activo"); //Se agrega clase activo al elemento seleccionado


      // Filtrar por categoria **************************************

      //obtiene del elemento seleccionado el texto y lo convierte a minusculas, ver que los elementos lo tengan en minusculas
      const categoria = evento.target.innerHTML.toLowerCase();
      //console.log(categoria);
      //grid.filter("[data-categoria]"); //Si algun elemento no tiene la categoria lo desaparece
      // para la seccion de clase grid se filtrara con MUURI con la etiqueta data-categoria
      //Se ejecuta un IF(?) ELSE(:), Si categoria es igual a todos muestra los elementos que 
      //tengan la etiqueta personalizada ("[data-categoria]"), de lo contrario muestra si tienen una en especifico
      categoria === 'todos' ? grid.filter("[data-categoria]") : grid.filter(`[data-categoria='${categoria}']`); //se pasa la categoria seleccionada anteriormente


    });
  });
  
});