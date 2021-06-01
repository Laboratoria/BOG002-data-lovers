import data from './data/athletes/athletes.js';
import {  orderAlfab, filtroPorMedalla } from './data.js';



function showingAthletes(athletes){
const athleteOnScreen1 = document.getElementById('athleteOnScreen1');



//Para obtener el nombre, deporte y país de los participantes
for(let i = 0;i<athletes.length;i ++){
    let nameAthlete = athletes[i]['name'];
    let sportAthlete = athletes[i]['sport'];
    let teamAthlete = athletes[i]['team'];
    let medalAthlete = athletes[i]['medal'];
    

    //CARD
    let divName = document.createElement ('h2');
    divName.innerHTML = nameAthlete;
    let divSport = document.createElement ('p');
    divSport.innerHTML = sportAthlete;
    let divTeam = document.createElement ('p');
    divTeam.innerHTML = teamAthlete;
    let divMedal = document.createElement ('p');
    divMedal.innerHTML = medalAthlete;
    let newDiv = document.createElement ('p');

// classlist CARD
    divName.classList.add ('cardFrName')
    divSport.classList.add ('cardFrSport')
    divTeam.classList.add ('cardFrTeam')
    divMedal.classList.add ('cardMedal')
    newDiv.classList.add ('cardFront');
    
    

//para mostrar el nombre, deporte y país en la CARD  
    newDiv.appendChild (divName);
    newDiv.appendChild (divSport);
    newDiv.appendChild (divTeam);
    newDiv.appendChild (divMedal);
    athleteOnScreen1.appendChild(newDiv); 
   
} 


}
window.onload = showingAthletes(data.athletes);

//ordernar A-Z Z-A

document.getElementById('filtroAz').addEventListener('change',filterAZ);

function filterAZ(e) {
    const orderAZ = e.target.value; 
    document.getElementById('athleteOnScreen1').innerHTML = '';
    const newOrder = orderAlfab(data.athletes, orderAZ);
    showingAthletes (newOrder);
}


//filtro por medalla
let dataMedal = data.athletes;
const medallaFiltro= document.getElementById('filterMedal');
medallaFiltro.addEventListener('change', filtro)
  function filtro () { 
//  const medallaFiltro= document.querySelector('.filterMedal');
   const valorSelect= (medallaFiltro.value);
//    console.log(valorSelect)
   document.getElementById('athleteOnScreen1').innerHTML = ''; 

  const filterMedal = filtroPorMedalla(dataMedal, valorSelect, 'athleteOnScreen1');
  
  showingAthletes(filterMedal);
//   console.log("filtro por", filterMedal)
}



