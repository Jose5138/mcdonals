fetch('../json/imagenes.json')
.then(res => res.json())
.then(dataJson=>{
      const fragment = document.createDocumentFragment()
      for(i in dataJson){
            // console.log(dataJson[i])
            const div = document.createElement('div')
            div.innerHTML =
            `
            <div class="card text-center">
                  <img src="../img/galeria/hamburguesas/${dataJson[i].id}.png" class="card-img-top" alt="...">
                  <div class="card-body">
                        <p class="card-text text-muted">${dataJson[i].description}</p>
                  </div>
            </div>
            `
            fragment.appendChild(div)
      }
      document.getElementById('sandwich').appendChild(fragment)
})   
