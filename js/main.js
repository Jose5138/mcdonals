fetch('./json/galeria.json')
.then(res => res.json())
.then(imagen =>{
      console.log()
      const fragment = document.createDocumentFragment()
      for(i in imagen){
            const div = document.createElement('div')
      
            div.innerHTML =`
            <div class="card text-center">
            <img src="../img/galería/Hamburguesas/${imagen[i].imagen}.png" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${imagen[i].descripcion}</p>
            </div>
            </div>`
            // console.log(div)
            fragment.appendChild(div)
      };
      document.getElementById('sandwich').appendChild(fragment)
})//end fectch
    