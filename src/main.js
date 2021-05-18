import data from './data/athletes/athletes.js';



function showingAthletes(athletes){
const athleteOnScreen1 = document.getElementById('athleteOnScreen1');



//Para obtener el nombre, deporte y país de los participantes
for(let i = 0;i<athletes.length;i ++){
    let nameAthlete = athletes[i]['name'];
    let sportAthlete = athletes[i]['sport'];
    let teamAthlete = athletes[i]['team'];
    let medalAthlete = athletes[i]['medal'];
    

    //CARD
    let divName = document.createElement ('div');
    divName.innerHTML = nameAthlete;
    let divSport = document.createElement ('div');
    divSport.innerHTML = sportAthlete;
    let divTeam = document.createElement ('div');
    divTeam.innerHTML = teamAthlete;
    let divMedal = document.createElement ('div');
    divMedal.innerHTML = medalAthlete;
    let newDiv = document.createElement ('div');

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

// const filtroAz = document.getElementById("filterAz");
// if (filterAz) {
//   filterAz.addEventListener("change", () => {
//     athleticsWinner(ordenar(data, filterAz.value));
//   });
// }




