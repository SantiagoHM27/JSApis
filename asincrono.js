const teams = ["Liverpool", "Real Madrid", "Dortmund"];

setTimeout(() => console.log('Tarea Asincronica'), 2000);

console.log('Sigue ejecutando')
console.log(teams);

function getTeams(){
    return teams;
}

function asincGeTeams(){
    setTimeout(() => teams, 2000);
}

console.log(getTeams());
console.log('Final de codigo')

console.log(asincGeTeams());
console.log('Termina el llamado de funcion');