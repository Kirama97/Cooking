
const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");

burguer.onclick = function (){
    nav.classList.toggle("active")
    
}



const bt_parametre = document.querySelectorAll('.bt_parametre');
const bloc_parametre = document.querySelectorAll('.bloc_parametre');


bt_parametre.forEach((element , index) => {
     element.onclick = ()=> {
      
         element.classList.toggle("toucher");

         if (bloc_parametre[index]) {
            bloc_parametre[index].classList.toggle("active");
        }


         
     } 
});


// document.addEventListener('click', () => {
//     bt_parametre.forEach((btn, i) => {
//         btn.classList.remove("toucher"); 
//         if (bloc_parametre[i]) {
//             bloc_parametre[i].classList.remove("active"); 
//         }
//     });
// });