window.onload = ()=>{
const imagenes = 
      [
            {
                  "id" : 1,
                  "description" : "Big Mac®"
            },
            {
                  "id" : 2,
                  "description" : "McRoyal Deluxe®"
            },
            {
                  "id" : 3,
                  "description" : "McSpicy®"
            },
            {
                  "id" : 4,
                  "description" : "Cuarto de Libra"
            },
            {
                  "id" : 5,
                  "description" : "McPollo®"
            },
            {
                  "id" : 6,
                  "description" : "CBO®"
            },
            {
                  "id" : 7,
                  "description" : "Signature Collection Queso de Cabra de 9Dani García"
            },
            {
                  "id" : 8,
                  "description" : "Signature Collection Queso de Cabra Doble de Dani García"
            },
            {
                  "id" : 9,
                  "description" : "American Style Chicken Buffalo"
            },
            {
                  "id" : 10,
                  "description" : "American Style Chicken Honey Mustard"
            },
            {
                  "id" : 11,
                  "description" : "Grand McExtreme de McDonal's® Intensive Cheddar Doble"
            },
            {
                  "id" : 12,
                  "description" : "Grand McExtreme de McDonald’s® Intense Cheddar Doble"
            },
            {
                  "id" : 13,
                  "description" : "Grand McExtreme de McDonal's® Bacon"
            },
            {
                  "id" : 14,
                  "description" : "Grand McExtreme de McDonal's® Bacon Doble"
            },
            {
                  "id" : 15,
                  "description" : "hamburguesa"
            },
            {
                  "id" : 16,
                  "description" : "Cheeseburger"
            },
            {
                  "id" : 17,
                  "description" : "Doble Cheeseburger"
            },
            {
                  "id" : 18,
                  "description" : "Triple Cheeseburger"
            },
            {
                  "id" : 19,
                  "description" : "Chicken & Cheese"
            },
            {
                  "id" : 20,
                  "description" : "McWrap Chicken crujiente & Bacon"
            },
            {
                  "id" : 21,
                  "description" : "Chicken Burger BBQ"
            },
            {
                  "id" : 22,
                  "description" : "Filete de pescado"
            },
            {
                  "id" : 23,
                  "description" : "McFish®"
            },
            {
                  "id" : 24,
                  "description" : "Chicken Mayo"
            },
            {
                  "id" : 25,
                  "description" : "Doble Chicken Mayo"
            },
            {
                  "id" : 26,
                  "description" : "Jenni"
            }
      ]
      // console.log(typeof imagenes)

            const fragment = document.createDocumentFragment()
            for(i in imagenes){
                  // console.log(imagenes[i].id)
                  // console.log(imagenes[i].descripcion)
                  const div = document.createElement('div')
                  div.innerHTML =
                  `
                  <div class="card text-center">
                        <img src="../img/galeria/hamburguesas/${imagenes[i].id}.png" class="card-img-top" alt="...">
                        <div class="card-body">
                              <p class="card-text text-muted">${imagenes[i].description}</p>
                        </div>
                  </div>
                  `
                  fragment.appendChild(div)
            }
            document.getElementById('sandwich').appendChild(fragment)

const menu = document.getElementById('menu');
const tamanio = document.getElementById('tamanio');
const complemento = document.getElementById('complemento');
const bebidas = document.getElementById('bebidas');
const postre = document.getElementById('postre');
const unidades = document.getElementById('unidades');
const importe = document.getElementById('importe');

// img pantalla
const pantalla = document.getElementById('pantalla');

menu.addEventListener('change', funcionGeneral, false);
tamanio.addEventListener('change', funcionGeneral, false);
complemento.addEventListener('change', funcionGeneral, false);
bebidas.addEventListener('change', funcionGeneral, false);
postre.addEventListener('change', funcionGeneral, false);
unidades.addEventListener('change', funcionGeneral, false);
importe.addEventListener('change', funcionGeneral, false);

function funcionGeneral(){
const mm = 8;
const tt = 1;
const cc = 1;
const bb = 1;
const pp = 2;

if(menu.value >= "1" &&  menu.value <= "6"){
      pantalla.src ='./img/menus/1.avif';
      tamanio.setAttribute("required", "")
      complemento.setAttribute("required", "")
      const sum = mm
      importe.value = sum + "€"
      if(tamanio.value == "grande"){
            const sum2 = sum + tt
            importe.value = sum2 + "€"
            if(complemento.value >= "1" && complemento.value <= "3"){
                  const sum3 = sum2 + cc
                  importe.value = sum3 + "€"
                  if(bebidas.value >= "1" && bebidas.value <= "5"){
                        const sum4 = sum3 + bb
                        importe.value = sum4 + "€"
                        if(postre.value >= "1" && postre.value <= "3"){
                        const sum5 = sum4 + pp
                        importe.value = sum5 + "€"
                              //else{
                                    // unidades

                              // }                                    
                        }//else{
                              // postre
                              // importe.value = 2 - pp}            
                  }//else{
                        // bebidas
                        // const sum3 = sum2 + cc
                        // importe.value = sum3 * unidades.value + "€"
                  // }
            }//else{
                  // complementos
                  // const sum2 = sum + tt
                  // importe.value = sum2 + "€"
            // }
      // }//else{
            // tamaño
            // const sum = mm * unidades.value
            // importe.value = sum + "€"
      }
}else{
      // menu
      // const sum = mm * unidades.value
      // importe.value = sum - 8;
      pantalla.src = './img/menus/0.png';
}


}//end funcion general

}//end window



            
     

