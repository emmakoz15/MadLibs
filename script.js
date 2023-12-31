let adjective1 = prompt("Enter an adjective:")
let adjective2 = prompt("Enter another adjective:")
let noun1 = prompt("Enter a noun:")
let noun2 = prompt("Enter another noun:")
let noun3 = prompt("Enter another noun:")
let verb1 = prompt("Enter a verb:")
let verb2 = prompt("Enter another verb:")
let verb3 = prompt("Enter a verb:")
let pronoun1 = prompt("Enter a pronoun:")
let pronoun2 = prompt("Enter another pronoun:")

let story =`Once upon a time, on Mars there was a ${noun1}, who was very ${adjective1}. ${pronoun1} had always dreampt of seeing ${noun2}. But in order to see ${noun2} the ${noun1} had to find a ${adjective2} ${noun3} and so the ${noun1} went off to find ${noun3}. And on ${pronoun2} jounrny ${pronoun1} ${verb1}, ${verb2}, ${verb3}. When the journeny had ended the ${noun1} had discoverd that ${pronoun1} had loved mars and didn't need to see ${noun2} because at the end of the day he he loved Mars.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML =`<p>${story}<p>`