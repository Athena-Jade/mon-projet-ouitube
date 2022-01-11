// lorsque la page est complètement chargée
window.onload = () => {
  var collapse = document.getElementById("collapse"); // récupération de l'id collapse qui déclenche l'action 
  var menu = document.getElementById("menu");    // permet d'agir sur l'id menu

  if (collapse) { // si c'est définit
    collapse.addEventListener("click", () => {  //permet d'écouter le click de la souris
      console.log("collapse"); // pour afficher le menu

      //refermer la nav
      if (menu.style.display === "block") {
        menu.style.display = "none";
      
    } else {
        menu.style.display = "block";
      }
    });

   
    if(menu){ // verifier si le menu existe
        menu.addEventListener('mouseleave', () =>{ // lorsque la souris quitte le menu, le menu se referme
          menu.style.display ="none";  // refermer le menu
        })
    }
  }

};
