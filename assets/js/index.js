const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descipcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descipcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descipcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descipcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descipcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descipcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];

  let inputs = Array.from(document.querySelectorAll(".nav input"))
  
  let itemsList = document.querySelector(".propiedades")
  let filter = document.querySelector (".filtros")
  let totalItems = document.querySelector("#totalpxropiedades")
  let buttonSearch = document.getElementById("botonbuscar")

  function reveal(propiedadesJSON){
    totalItems.innerHTML = propiedadesJSON.length
    itemsList.innerHTML = ""

    for (const item of propiedadesJSON) {
      const newItem = document.createElement("div")
      newItem.classList.add("itemJS")
      newItem.innerHTML = `<div class="propiedades">
      <div class="propiedad">
      <div class="imagen">
      <img src = "${item.src}" alt = "${item.nombre}">
      </div>
      <section class="detalles">
        <h5>${item.nombre}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${item.cuartos}</p>
            <p>Metros: ${item.metros}</p>
          </div>
        <p class="my-3">${item.descipcion}</p>
        <button class="btn btn-info ">Ver más</button>
      </section>
      </div>
      </div>
      `
      itemsList.appendChild(newItem)
    }
  }

  reveal(propiedadesJSON)

  const totalFilter = () => {
    const [{value:cuartos},{value:metrosdesde},{value:metroshasta}] = inputs
    if (!metrosdesde && !metroshasta && !cuartos) {
      alert ("Faltan campos por llenar")
      return false
    }

    const getTotal = propiedadesJSON.filter((item) => item.cuartos == cuartos && item.metros >= metrosdesde && item.metros <= metroshasta);

    reveal(getTotal)
  }

  buttonSearch.addEventListener ("click" , totalFilter)

